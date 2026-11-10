/* ==========================================================================
   Sean Merriam — GSAP text effects
   FX—01 scramble decode · FX—02 masked line reveal · FX—03 word blur cascade
   FX—04 ticker marquee · FX—05 scrubbed ink · FX—06 elastic/wipe/roll-up
   FX—07 pinned scrubbed headline swap · FX—08 word stagger + blur
   FX—09 gradient sweep · FX—10 char cascade + hover scramble
   ========================================================================== */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, CustomEase);

export function initializeLandingPage() {
	let disposed = false;
	let readyFrame;
	let failsafeTimer;
	const context = gsap.context(() => {});
	const runBuild = () => context.add(() => build());
	CustomEase.create("spec", "M0,0 C0.16,0 0.16,1 1,1");
	CustomEase.create("specIn", "M0,0 C0.7,0 0.84,1 1,1");

	ScrollTrigger.config({ ignoreMobileResize: true });

	/* --------------------------------------------------------------------------
   helpers
   -------------------------------------------------------------------------- */

	const INK = "#111618";
	const INK_FAINT = "rgba(17,22,24,.16)";
	const INK_SOLID = "rgba(17,22,24,.88)";
	const RED = "#C4391D";

	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
	const isReduced = () => reduced.matches;

	const q = (sel, ctx = document) => ctx.querySelector(sel);
	const qa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

	function isInViewport(el) {
		const r = el.getBoundingClientRect();
		return r.top < window.innerHeight * 0.9 && r.bottom > 0;
	}

	/* everything created during a build, torn down on rebuild */
	const state = {
		splits: [], // SplitText instances
		timelines: [], // gsap tweens / timelines
		triggers: [], // ScrollTrigger instances
		listeners: [], // DOM listeners
		splitsByEl: new WeakMap(),
		handled: new Set(), // elements animated by a dedicated effect
		built: false,
	};

	/* Mark an element as owned by a specific effect so the generic pass skips it. */
	function handle(el) {
		if (el) state.handled.add(el);
		return el;
	}

	/* Mount a split on an element and remember how to undo it. */
	function mountSplit(el, vars) {
		const split = SplitText.create(el, vars);
		state.splits.push(split);
		state.splitsByEl.set(el, split);
		return split;
	}

	function track(tl) {
		if (tl) state.timelines.push(tl);
		return tl;
	}

	function trackTrigger(st) {
		if (st) state.triggers.push(st);
		return st;
	}

	/* A scroll reveal that gracefully degrades if the element is already on screen
   (which happens when the page is rebuilt after a resize). */
	function scrollReveal(el, targets, fromVars, toVars, start = "top 86%") {
		if (isReduced()) {
			return gsap.set(targets, { ...toVars, clearProps: "transform" });
		}
		if (isInViewport(el)) {
			return track(
				gsap.fromTo(targets, fromVars, {
					...toVars,
					duration: 0.01,
					immediateRender: true,
				}),
			);
		}
		return track(
			gsap.fromTo(targets, fromVars, {
				...toVars,
				scrollTrigger: { trigger: el, start, once: true },
			}),
		);
	}

	/* --------------------------------------------------------------------------
   FX—01  Scramble decode
   -------------------------------------------------------------------------- */

	function scrambleTo(
		el,
		{ duration = 1.1, chars = "upperAndLowerCase", delay = 0 } = {},
	) {
		const text = el.dataset.scramble || el.textContent;
		el.dataset.scramble = text;
		const tween = gsap.to(el, {
			duration,
			delay,
			ease: "none",
			overwrite: true,
			scrambleText: { text, chars, revealDelay: 0.12, speed: 0.7 },
		});
		return track(tween);
	}

	/* --------------------------------------------------------------------------
   FX—02  Masked line reveal
   -------------------------------------------------------------------------- */

	function revealLines(
		el,
		{ start = "top 86%", stagger = 0.085, duration = 1.05 } = {},
	) {
		handle(el);
		const split = mountSplit(el, {
			type: "lines,words",
			mask: "lines",
			linesClass: "split-line",
			wordsClass: "split-word",
			aria: "auto",
		});
		scrollReveal(
			el,
			split.lines,
			{ yPercent: 112, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration, ease: "expo.out", stagger },
			start,
		);
		return split;
	}

	/* --------------------------------------------------------------------------
   FX—03  Word blur cascade
   -------------------------------------------------------------------------- */

	function revealWordsBlur(
		el,
		{ start = "top 88%", each = 0.012, duration = 0.6 } = {},
	) {
		const split = mountSplit(el, {
			type: "words,chars",
			wordsClass: "split-word",
			charsClass: "split-char",
			aria: "auto",
		});
		scrollReveal(
			el,
			split.words,
			{ opacity: 0, y: 8, filter: "blur(7px)" },
			{
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
				duration,
				ease: "power2.out",
				stagger: { each, from: "start" },
			},
			start,
		);
		return split;
	}

	/* --------------------------------------------------------------------------
   FX—06  Service card variants
   -------------------------------------------------------------------------- */

	function serviceReveal(card) {
		const title = q(".service__title", card);
		const num = q(".service__num", card);
		const mode = card.dataset.service;

		// the 01 / 02 / 03 index — char cascade
		if (num) {
			const numSplit = mountSplit(num, {
				type: "chars",
				charsClass: "split-char",
				aria: "auto",
			});
			scrollReveal(
				card,
				numSplit.chars,
				{ opacity: 0, y: 14 },
				{ opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.06 },
				"top 92%",
			);
			handle(num);
		}

		if (mode === "elastic") {
			// FX—06A — characters pop in with overshoot
			const split = mountSplit(title, {
				type: "chars",
				charsClass: "split-char",
				aria: "auto",
			});
			scrollReveal(
				card,
				split.chars,
				{ opacity: 0, scale: 0.4, y: 22, rotationX: -55 },
				{
					opacity: 1,
					scale: 1,
					y: 0,
					rotationX: 0,
					duration: 0.9,
					ease: "back.out(2.4)",
					stagger: 0.018,
				},
				"top 88%",
			);
		} else if (mode === "wipe") {
			// FX—06B — lines slide in behind a mask, skewed like a page shifting
			const split = mountSplit(title, {
				type: "lines,words",
				mask: "lines",
				linesClass: "split-line",
				wordsClass: "split-word",
				aria: "auto",
			});
			scrollReveal(
				card,
				split.lines,
				{ xPercent: -108, skewX: -9, opacity: 0 },
				{
					xPercent: 0,
					skewX: 0,
					opacity: 1,
					duration: 1,
					ease: "expo.out",
					stagger: 0.09,
				},
				"top 88%",
			);
		} else {
			// FX—06C — words roll up out of the baseline
			const split = mountSplit(title, {
				type: "words",
				mask: "words",
				wordsClass: "split-word",
				aria: "auto",
			});
			scrollReveal(
				card,
				split.words,
				{ yPercent: 118, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.95,
					ease: "expo.out",
					stagger: 0.05,
				},
				"top 88%",
			);
		}
		handle(title);

		// supporting copy
		const bodyPs = qa(".service__body p", card);
		if (bodyPs.length) {
			scrollReveal(
				card,
				bodyPs,
				{ opacity: 0, y: 16 },
				{ opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.09 },
				"top 86%",
			);
			bodyPs.forEach((p) => handle(p));
		}
		const fit = q(".service__fit", card);
		if (fit) {
			scrollReveal(
				card,
				fit,
				{ opacity: 0, y: 14 },
				{ opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
				"top 88%",
			);
			handle(fit);
		}
		const link = q(".text-link", card);
		if (link) {
			scrollReveal(
				card,
				link,
				{ opacity: 0, y: 10 },
				{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
				"top 90%",
			);
			handle(link);
		}
	}

	/* --------------------------------------------------------------------------
   FX—05  Scrubbed ink reveal
   -------------------------------------------------------------------------- */

	function scrubbedInk(el) {
		handle(el);
		const split = mountSplit(el, {
			type: "words",
			wordsClass: "split-word",
			aria: "auto",
		});
		gsap.set(split.words, { color: INK_FAINT });
		if (isReduced()) {
			gsap.set(split.words, { color: INK_SOLID });
			return split;
		}
		const tween = gsap.to(split.words, {
			color: INK_SOLID,
			ease: "none",
			stagger: { each: 0.015, from: "start" },
			scrollTrigger: trackTrigger({
				trigger: el,
				start: "top 92%",
				end: "bottom 62%",
				scrub: 0.4,
			}),
		});
		track(tween);
		return split;
	}

	/* --------------------------------------------------------------------------
   FX—07  Pinned scrubbed headline swap
   -------------------------------------------------------------------------- */

	function processSwap() {
		const root = q("[data-process]");
		if (!root) return;
		const section = root.closest(".section--process");
		const panels = qa("[data-panel]", root);
		const steps = qa(".process__step", root);
		const stepNum = q("[data-stepnum]", root);
		const ghost = q("[data-ghost]", root);

		let activeIdx = -1;
		function setActive(i) {
			if (i === activeIdx) return;
			activeIdx = i;
			steps.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
			if (stepNum) stepNum.textContent = String(i + 1).padStart(2, "0");
			if (ghost) {
				ghost.textContent = String(i + 1).padStart(2, "0");
				if (!isReduced()) {
					gsap.fromTo(
						ghost,
						{ opacity: 0, y: 34 },
						{
							opacity: 0.05,
							y: 0,
							duration: 0.7,
							ease: "power3.out",
							overwrite: true,
						},
					);
				} else {
					gsap.set(ghost, { opacity: 0.05 });
				}
			}
		}

		if (isReduced()) {
			if (section) section.classList.add("is-static");
			gsap.set(panels, { clearProps: "all" });
			setActive(0);
			return;
		}
		if (section) section.classList.remove("is-static");

		gsap.set(panels, { autoAlpha: 0, y: 34 });
		gsap.set(panels[0], { autoAlpha: 1, y: 0 });
		setActive(0);

		const tl = gsap.timeline({
			scrollTrigger: trackTrigger({
				trigger: root,
				start: "top top",
				end: "+=2200",
				scrub: 0.6,
				pin: ".process__stage",
				anticipatePin: 1,
				onUpdate: (self) => {
					const p = self.progress * (panels.length - 1);
					setActive(Math.min(panels.length - 1, Math.round(p)));
				},
			}),
		});

		panels.forEach((panel, i) => {
			if (i === 0) return;
			tl.to(
				panels[i - 1],
				{ autoAlpha: 0, y: -30, duration: 0.4, ease: "power2.in" },
				i - 0.4,
			).fromTo(
				panel,
				{ autoAlpha: 0, y: 30 },
				{ autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" },
				i - 0.2,
			);
		});

		track(tl);
	}

	/* --------------------------------------------------------------------------
   FX—08  FAQ accordion — word stagger + blur reveal
   -------------------------------------------------------------------------- */

	function faqAccordion() {
		const items = qa(".faq__item");

		items.forEach((item) => {
			const btn = q(".faq__btn", item);
			const panel = q(".faq__a", item);
			const inner = q(".faq__a-inner", item);
			const copy = q(".faq__a-inner p", item);
			if (!btn || !panel || !inner) return;

			const words = copy
				? mountSplit(copy, {
						type: "words",
						wordsClass: "split-word",
						aria: "auto",
					}).words
				: [];

			const setHeight = (v) => {
				panel.style.gridTemplateRows = `${v}fr`;
			};

			if (words.length) {
				if (isReduced()) gsap.set(words, { clearProps: "opacity,y,filter" });
				else gsap.set(words, { opacity: 0, y: 10, filter: "blur(5px)" });
			}

			const open = () => {
				const isOpen = item.classList.contains("is-open");
				items.forEach((other) => {
					if (other === item) return;
					other.classList.remove("is-open");
					const otherBtn = q(".faq__btn", other);
					const otherPanel = q(".faq__a", other);
					const otherWords = other.__words || [];
					if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
					if (otherPanel) otherPanel.style.gridTemplateRows = "0fr";
					if (otherWords.length && !isReduced()) {
						track(
							gsap.to(otherWords, {
								opacity: 0,
								y: 6,
								filter: "blur(4px)",
								duration: 0.22,
								ease: "power1.in",
							}),
						);
					}
				});

				item.classList.toggle("is-open", !isOpen);
				btn.setAttribute("aria-expanded", String(!isOpen));

				if (isOpen) {
					const proxy = { v: 1 };
					track(
						gsap.to(proxy, {
							v: 0,
							duration: 0.42,
							ease: "power3.inOut",
							onUpdate: () => setHeight(proxy.v),
							onComplete: () => setHeight(0),
						}),
					);
					if (words.length && !isReduced()) {
						track(
							gsap.to(words, {
								opacity: 0,
								y: 6,
								filter: "blur(4px)",
								duration: 0.24,
								ease: "power1.in",
							}),
						);
					}
				} else {
					const proxy = { v: 0 };
					track(
						gsap.to(proxy, {
							v: 1,
							duration: 0.5,
							ease: "power3.inOut",
							onUpdate: () => setHeight(proxy.v),
							onComplete: () => setHeight(1),
						}),
					);
					if (words.length && !isReduced()) {
						track(
							gsap.to(words, {
								opacity: 1,
								y: 0,
								filter: "blur(0px)",
								duration: 0.55,
								ease: "power2.out",
								stagger: 0.011,
							}),
						);
					}
				}
			};

			item.__words = words;
			const handler = () => open();
			btn.addEventListener("click", handler);
			state.listeners.push({ el: btn, type: "click", handler });
		});
	}

	/* --------------------------------------------------------------------------
   FX—09  Gradient sweep across characters
   -------------------------------------------------------------------------- */

	function gradientSweep(el, { start = "top 84%" } = {}) {
		handle(el);
		const split = mountSplit(el, {
			type: "chars",
			charsClass: "split-char",
			aria: "auto",
		});

		const paint = () => {
			gsap.set(split.chars, {
				backgroundImage: `linear-gradient(100deg, ${INK} 0%, ${INK} 42%, ${RED} 50%, ${INK} 58%, ${INK} 100%)`,
				backgroundSize: "260% 100%",
				backgroundPositionX: "100%",
				WebkitBackgroundClip: "text",
				backgroundClip: "text",
				color: "transparent",
			});
		};

		if (isReduced()) {
			gsap.set(split.chars, { color: INK });
			return split;
		}

		paint();

		const run = () => {
			paint();
			const tl = gsap.timeline({
				scrollTrigger: trackTrigger({ trigger: el, start, once: true }),
			});
			tl.fromTo(
				split.chars,
				{ backgroundPositionX: "100%", y: 10, opacity: 0 },
				{
					backgroundPositionX: "0%",
					y: 0,
					opacity: 1,
					duration: 1.6,
					ease: "none",
					stagger: { each: 0.028, from: "start" },
				},
			);
			tl.to(split.chars, {
				color: INK,
				duration: 0.01,
				onComplete: () =>
					gsap.set(split.chars, {
						clearProps:
							"backgroundImage,backgroundSize,backgroundPositionX,WebkitBackgroundClip,backgroundClip",
					}),
			});
			track(tl);
		};

		if (isInViewport(el)) run();
		else {
			const st = ScrollTrigger.create({
				trigger: el,
				start,
				once: true,
				onEnter: run,
			});
			trackTrigger(st);
		}
		return split;
	}

	/* --------------------------------------------------------------------------
   FX—10  Char cascade + hover scramble
   -------------------------------------------------------------------------- */

	function charCascade(el) {
		handle(el);
		const split = mountSplit(el, {
			type: "chars",
			charsClass: "split-char",
			aria: "auto",
		});
		scrollReveal(
			el,
			split.chars,
			{ opacity: 0, y: 46, rotationX: -40 },
			{
				opacity: 1,
				y: 0,
				rotationX: 0,
				duration: 1.05,
				ease: "expo.out",
				stagger: 0.028,
			},
			"top 90%",
		);
		return split;
	}

	function hoverScramble(el) {
		const text = el.textContent.trim();
		const enter = () => {
			gsap.to(el, {
				duration: 0.65,
				ease: "none",
				overwrite: "auto",
				scrambleText: {
					text,
					chars: "upperAndLowerCase",
					revealDelay: 0.08,
					speed: 0.9,
				},
			});
		};
		el.addEventListener("mouseenter", enter);
		el.addEventListener("focus", enter);
		state.listeners.push({ el, type: "mouseenter", handler: enter });
		state.listeners.push({ el, type: "focus", handler: enter });
	}

	/* --------------------------------------------------------------------------
   FX—04  Ticker marquee
   -------------------------------------------------------------------------- */

	function ticker() {
		const track_ = q("[data-ticker]");
		if (!track_) return;
		const set = q(".ticker__set", track_);
		if (!set) return;

		if (!q(".ticker__set + .ticker__set", track_)) {
			track_.appendChild(set.cloneNode(true));
		}

		if (isReduced()) return;

		const tween = gsap.to(track_, {
			xPercent: -50,
			duration: 34,
			ease: "none",
			repeat: -1,
		});
		track(tween);
	}

	/* --------------------------------------------------------------------------
   Spec rail readout + scroll progress
   -------------------------------------------------------------------------- */

	function specRail() {
		const railNum = q(".rail__num");
		const railName = q(".rail__name");
		const railCode = q(".rail__code");
		const railTech = q(".rail__tech");
		if (!railNum) return;

		const sections = qa("[data-section]");
		sections.forEach((sec, i) => {
			const st = ScrollTrigger.create({
				trigger: sec,
				start: "top 55%",
				end: "bottom 55%",
				onToggle: (self) => {
					if (!self.isActive) return;
					const label = String(i).padStart(2, "0");
					gsap.to([railNum, railName, railCode, railTech], {
						opacity: 0,
						duration: 0.12,
						overwrite: true,
						onComplete: () => {
							railNum.textContent = label;
							railName.textContent = sec.dataset.section || "";
							railCode.textContent = sec.dataset.fx || "";
							railTech.textContent = sec.dataset.tech || "";
							gsap.to([railNum, railName, railCode, railTech], {
								opacity: 1,
								duration: 0.25,
								overwrite: true,
							});
						},
					});
				},
			});
			trackTrigger(st);
		});
	}

	function scrollProgress() {
		const bar = q(".scroll-progress__bar");
		if (!bar || isReduced()) return;
		const tween = gsap.to(bar, {
			scaleX: 1,
			ease: "none",
			scrollTrigger: trackTrigger({
				trigger: document.body,
				start: "top top",
				end: "bottom bottom",
				scrub: 0.25,
			}),
		});
		track(tween);
	}

	/* --------------------------------------------------------------------------
   FX—00  Motion index — replayable specimens
   -------------------------------------------------------------------------- */

	const demoSplits = new WeakMap();

	function runDemo(el) {
		const kind = el.dataset.demo;
		const original = el.dataset.original || el.textContent.trim();
		el.dataset.original = original;

		// reset any previous split
		const prev = demoSplits.get(el);
		if (prev) {
			prev.revert();
			demoSplits.delete(el);
		}
		gsap.killTweensOf(el);
		gsap.set(el, { clearProps: "all" });
		el.textContent = original;

		const rtl = () => {
			if (kind === "scramble") {
				gsap.to(el, {
					duration: 0.95,
					ease: "none",
					scrambleText: {
						text: original,
						chars: "upperAndLowerCase",
						revealDelay: 0.1,
						speed: 0.8,
					},
				});
				return;
			}

			let split;
			if (kind === "mask") {
				split = SplitText.create(el, {
					type: "words",
					mask: "words",
					wordsClass: "split-word",
					aria: "auto",
				});
				gsap.from(split.words, {
					yPercent: 118,
					opacity: 0,
					duration: 0.85,
					ease: "expo.out",
					stagger: 0.06,
				});
			} else if (kind === "blur") {
				split = SplitText.create(el, {
					type: "chars",
					charsClass: "split-char",
					aria: "auto",
				});
				gsap.from(split.chars, {
					opacity: 0,
					y: 8,
					filter: "blur(8px)",
					duration: 0.5,
					ease: "power2.out",
					stagger: 0.012,
				});
			} else if (kind === "wipe") {
				split = SplitText.create(el, {
					type: "lines,words",
					mask: "lines",
					linesClass: "split-line",
					wordsClass: "split-word",
					aria: "auto",
				});
				gsap.from(split.lines, {
					xPercent: -106,
					skewX: -10,
					opacity: 0,
					duration: 0.9,
					ease: "expo.out",
					stagger: 0.08,
				});
			} else if (kind === "sweep") {
				split = SplitText.create(el, {
					type: "chars",
					charsClass: "split-char",
					aria: "auto",
				});
				gsap.set(split.chars, {
					backgroundImage: `linear-gradient(100deg, ${INK} 0%, ${INK} 42%, ${RED} 50%, ${INK} 58%, ${INK} 100%)`,
					backgroundSize: "260% 100%",
					backgroundPositionX: "100%",
					WebkitBackgroundClip: "text",
					backgroundClip: "text",
					color: "transparent",
				});
				gsap.fromTo(
					split.chars,
					{ backgroundPositionX: "100%" },
					{
						backgroundPositionX: "0%",
						duration: 1.15,
						ease: "none",
						stagger: { each: 0.035, from: "start" },
						onComplete: () =>
							gsap.set(split.chars, {
								color: INK,
								clearProps:
									"backgroundImage,backgroundSize,backgroundPositionX,WebkitBackgroundClip,backgroundClip",
							}),
					},
				);
			} else if (kind === "elastic") {
				split = SplitText.create(el, {
					type: "chars",
					charsClass: "split-char",
					aria: "auto",
				});
				gsap.from(split.chars, {
					opacity: 0,
					scale: 0.35,
					rotationX: -70,
					duration: 0.8,
					ease: "back.out(2.6)",
					stagger: 0.018,
				});
			} else if (kind === "rollup") {
				split = SplitText.create(el, {
					type: "words",
					mask: "words",
					wordsClass: "split-word",
					aria: "auto",
				});
				gsap.from(split.words, {
					yPercent: 118,
					opacity: 0,
					duration: 0.85,
					ease: "expo.out",
					stagger: 0.05,
				});
			} else if (kind === "ink") {
				split = SplitText.create(el, {
					type: "words",
					wordsClass: "split-word",
					aria: "auto",
				});
				gsap.set(split.words, { color: INK_FAINT });
				gsap.to(split.words, {
					color: INK_SOLID,
					ease: "none",
					stagger: { each: 0.05, from: "start" },
					duration: 1.1,
				});
			}
			if (split) demoSplits.set(el, split);
		};

		if (isReduced()) {
			el.textContent = original;
			return;
		}
		rtl();
	}

	function motionIndex() {
		qa("[data-demo]").forEach((el) => {
			el.dataset.original = el.textContent.trim();
		});

		qa("[data-replay]").forEach((btn) => {
			const card = btn.closest(".fx-card");
			const demo = q(".fx-card__demo", card);
			const handler = () => {
				if (demo) runDemo(demo);
			};
			btn.addEventListener("click", handler);
			state.listeners.push({ el: btn, type: "click", handler });
		});

		// hover a specimen to run it again
		qa(".fx-card__demo").forEach((demo) => {
			const handler = () => runDemo(demo);
			demo.addEventListener("mouseenter", handler);
			state.listeners.push({ el: demo, type: "mouseenter", handler });
		});

		if (isReduced()) return;

		// play each specimen the first time its card scrolls into view
		qa(".fx-card").forEach((card) => {
			const demo = q(".fx-card__demo", card);
			if (!demo) return;
			const st = ScrollTrigger.create({
				trigger: card,
				start: "top 88%",
				once: true,
				onEnter: () => {
					if (demo.dataset.played) return;
					demo.dataset.played = "1";
					runDemo(demo);
				},
			});
			trackTrigger(st);
		});
	}

	/* --------------------------------------------------------------------------
   Hero — the opening sequence
   -------------------------------------------------------------------------- */

	function hero() {
		const eyebrowText = q(".eyebrow [data-scramble]");
		const availText = q(".availability__text");
		const h1 = q(".display--hero");
		const lede = q(".lede");
		const ctaRow = q(".cta-row");
		const heroRule = q(".rule--hero");
		const replay = !state.built;

		if (isReduced()) {
			gsap.set([h1, lede, ctaRow, heroRule], { clearProps: "opacity" });
			return;
		}

		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

		// FX—01 — the eyebrow decodes
		if (eyebrowText) {
			const text = eyebrowText.dataset.scramble || eyebrowText.textContent;
			eyebrowText.dataset.scramble = text;
			if (replay) {
				tl.to(
					eyebrowText,
					{
						duration: 1.15,
						ease: "none",
						scrambleText: {
							text,
							chars: "upperAndLowerCase",
							revealDelay: 0.15,
							speed: 0.75,
						},
					},
					0.05,
				);
			}
		}
		handle(q(".eyebrow"));
		handle(q(".availability"));

		// FX—01 — the availability line decodes a beat later
		if (availText) {
			const text = availText.dataset.scramble || availText.textContent;
			availText.dataset.scramble = text;
			if (replay) {
				tl.to(
					availText,
					{
						duration: 1,
						ease: "none",
						scrambleText: {
							text,
							chars: "upperAndLowerCase",
							revealDelay: 0.1,
							speed: 0.85,
						},
					},
					0.45,
				);
			}
		}

		// FX—02 — the headline rises out of its masks
		if (h1) {
			handle(h1);
			const split = mountSplit(h1, {
				type: "lines,words",
				mask: "lines",
				linesClass: "split-line",
				wordsClass: "split-word",
				aria: "auto",
			});
			if (replay) {
				tl.from(
					split.lines,
					{
						yPercent: 115,
						opacity: 0,
						duration: 1.15,
						ease: "expo.out",
						stagger: 0.085,
					},
					0.15,
				);
			} else {
				gsap.set(split.lines, { yPercent: 0, opacity: 1 });
			}
		}

		// FX—03 — the subhead resolves word by word out of focus
		if (lede) {
			handle(lede);
			const split = mountSplit(lede, {
				type: "words,chars",
				wordsClass: "split-word",
				charsClass: "split-char",
				aria: "auto",
			});
			if (replay) {
				tl.from(
					split.words,
					{
						opacity: 0,
						y: 10,
						filter: "blur(8px)",
						duration: 0.62,
						ease: "power2.out",
						stagger: 0.012,
					},
					0.85,
				);
			} else {
				gsap.set(split.words, { opacity: 1, y: 0, filter: "blur(0px)" });
			}
		}

		if (heroRule) {
			if (replay)
				tl.fromTo(heroRule, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0);
			else gsap.set(heroRule, { opacity: 1 });
			handle(heroRule);
		}
		if (ctaRow) {
			if (replay)
				tl.from(
					qa("li", ctaRow),
					{ opacity: 0, y: 18, duration: 0.6, stagger: 0.08 },
					1.15,
				);
			else gsap.set(qa("li", ctaRow), { opacity: 1, y: 0 });
			handle(ctaRow);
		}

		track(tl);
	}

	/* --------------------------------------------------------------------------
   Generic fallbacks — anything marked for reveal that nothing else animates
   -------------------------------------------------------------------------- */

	function genericReveals() {
		qa("[data-hide-until-ready]").forEach((el) => {
			if (state.handled.has(el)) return;
			// 'top bottom' fires the moment the element enters the viewport — important for
			// the last elements on the page, which the scroll can never take past 'top 92%'.
			scrollReveal(
				el,
				el,
				{ opacity: 0, y: 16 },
				{ opacity: 1, y: 0, duration: 0.75, ease: "power2.out" },
				"top bottom",
			);
			state.handled.add(el);
		});
	}

	/* --------------------------------------------------------------------------
   build / teardown
   -------------------------------------------------------------------------- */

	function teardown() {
		state.listeners.forEach(({ el, type, handler }) =>
			el.removeEventListener(type, handler),
		);
		state.listeners = [];

		// kill every ScrollTrigger — including the ones GSAP created from a config
		state.timelines.forEach((t) => t.scrollTrigger?.kill());
		state.triggers.forEach((st) => {
			if (typeof st.kill === "function") st.kill();
		});
		state.timelines.forEach((t) => {
			if (typeof t.kill === "function") t.kill();
		});
		state.splits.forEach((s) => {
			try {
				s.revert();
			} catch (e) {
				/* noop */
			}
		});
		state.triggers = [];
		state.timelines = [];
		state.splits = [];
		state.splitsByEl = new WeakMap();
		state.handled = new Set();
		gsap.set("[data-hide-until-ready]", { clearProps: "opacity" });
		qa(".faq__item").forEach((item) => item.classList.remove("is-open"));
		qa(".faq__a").forEach((p) => {
			p.style.gridTemplateRows = "0fr";
		});
		qa(".section--process").forEach((s) => s.classList.remove("is-static"));
		qa(".ticker__set").forEach((s, i) => {
			if (i > 0) s.remove();
		});
	}

	function build() {
		teardown();

		hero();

		// About — FX—05 scrubbed ink on the first two paragraphs
		qa("[data-scrub-ink]").forEach((p) => scrubbedInk(p));

		// care list
		qa("[data-cares]").forEach((li) => {
			const num = q(".cares__num", li);
			const text = q(".cares__text", li);
			handle(li);
			if (num) {
				const s = mountSplit(num, {
					type: "chars",
					charsClass: "split-char",
					aria: "auto",
				});
				scrollReveal(
					li,
					s.chars,
					{ opacity: 0, y: 10 },
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						ease: "power3.out",
						stagger: 0.05,
					},
					"top 92%",
				);
				handle(num);
			}
			if (text) {
				const s = mountSplit(text, {
					type: "words",
					wordsClass: "split-word",
					aria: "auto",
				});
				scrollReveal(
					li,
					s.words,
					{ opacity: 0, y: 12 },
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power2.out",
						stagger: 0.018,
					},
					"top 92%",
				);
				handle(text);
			}
		});

		// Services
		qa(".service").forEach((card) => serviceReveal(card));

		// Process
		processSwap();

		// FAQ
		faqAccordion();

		// Closing — FX—09
		const closing = q(".display--closing");
		if (closing) gradientSweep(closing);

		// Footer — FX—10
		const footerBrand = q(".footer__brand");
		if (footerBrand) charCascade(footerBrand);

		// hover scramble on the service links
		qa("[data-scramble-hover]").forEach((el) => hoverScramble(el));

		// section headings use the masked line reveal
		qa(".display--section").forEach((el) => revealLines(el));

		ticker();
		specRail();
		scrollProgress();
		motionIndex();
		genericReveals();

		ScrollTrigger.refresh();
		state.built = true;
	}

	/* --------------------------------------------------------------------------
   boot
   -------------------------------------------------------------------------- */

	function revealReady() {
		if (disposed) return;
		document.documentElement.classList.add("is-ready");
	}

	function boot() {
		const fontsReady = document.fonts?.ready ?? Promise.resolve();
		fontsReady.then(() => {
			if (disposed) return;
			runBuild();
			readyFrame = requestAnimationFrame(revealReady);
		});
		failsafeTimer = setTimeout(revealReady, 3000);
	}

	let resizeTimer;
	let lastWidth = window.innerWidth;
	function onResize() {
		if (window.innerWidth === lastWidth) return;
		lastWidth = window.innerWidth;
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			if (disposed) return;
			runBuild();
			readyFrame = requestAnimationFrame(revealReady);
		}, 320);
	}
	function onMotionChange() {
		runBuild();
		readyFrame = requestAnimationFrame(revealReady);
	}
	window.addEventListener("resize", onResize);
	reduced.addEventListener("change", onMotionChange);
	boot();

	return () => {
		disposed = true;
		clearTimeout(resizeTimer);
		clearTimeout(failsafeTimer);
		cancelAnimationFrame(readyFrame);
		window.removeEventListener("resize", onResize);
		reduced.removeEventListener("change", onMotionChange);
		teardown();
		context.revert();
	};
}
