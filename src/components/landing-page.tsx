export function LandingPage() {
	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>

			<div className="scroll-progress" aria-hidden="true">
				<span className="scroll-progress__bar"></span>
			</div>

			<div className="sheet">
				<aside className="rail" aria-hidden="true">
					<div className="rail__inner">
						<p className="rail__index">
							<span className="rail__num">00</span>
							<span className="rail__name">Opening</span>
						</p>
						<p className="rail__fx">
							<span className="rail__code">FX—00</span>
							<span className="rail__tech">Page load</span>
						</p>
						<span className="rail__line"></span>
					</div>
				</aside>

				<div className="body">
					<header className="masthead">
						<a className="brand" href="#top">
							<svg
								className="brand__mark"
								viewBox="0 0 24 24"
								aria-hidden="true"
								focusable="false"
							>
								<circle
									cx="12"
									cy="12"
									r="7.2"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.1"
								/>
								<path
									d="M12 1.4v5.2M12 17.4v5.2M1.4 12h5.2M17.4 12h5.2"
									stroke="currentColor"
									strokeWidth="1.1"
								/>
								<circle cx="12" cy="12" r="1.6" fill="currentColor" />
							</svg>
							<span className="brand__name">Sean Merriam</span>
						</a>
						<nav className="nav" aria-label="Services">
							<a href="/services/llm-integrations">LLM Integrations</a>
							<span className="nav__sep" aria-hidden="true">
								·
							</span>
							<a href="/services/wordpress-migrations">WordPress Migrations</a>
							<span className="nav__sep" aria-hidden="true">
								·
							</span>
							<a href="/services/web-development">Web Development</a>
						</nav>
					</header>

					<main id="main">
						<section
							className="hero"
							id="top"
							data-section="Opening"
							data-fx="FX—01 / FX—02 / FX—03"
							data-tech="Scramble · masked lines · word blur"
						>
							<div className="hero__marks" aria-hidden="true">
								<svg className="crosshair crosshair--tl" viewBox="0 0 40 40">
									<path
										d="M20 0v14M20 26v14M0 20h14M26 20h14"
										stroke="currentColor"
										strokeWidth="1"
									/>
									<circle
										cx="20"
										cy="20"
										r="9"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
									/>
								</svg>
								<svg className="crosshair crosshair--br" viewBox="0 0 40 40">
									<path
										d="M20 0v14M20 26v14M0 20h14M26 20h14"
										stroke="currentColor"
										strokeWidth="1"
									/>
									<circle
										cx="20"
										cy="20"
										r="9"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
									/>
								</svg>
							</div>

							<p className="rule rule--hero" data-hide-until-ready="">
								<span className="rule__code">FX—01 · FX—02 · FX—03</span>
								<span className="rule__label">
									Scramble decode / masked line reveal / word blur cascade
								</span>
							</p>

							<p className="eyebrow" data-hide-until-ready="">
								<span className="eyebrow__dot" aria-hidden="true"></span>
								<span data-scramble="Sean Merriam · Design engineer · Santa Cruz, CA">
									Sean Merriam · Design engineer · Santa Cruz, CA
								</span>
							</p>

							<h1
								className="display display--hero"
								data-split="hero"
								data-hide-until-ready=""
							>
								I build websites and the software behind them.
							</h1>

							<p className="availability" data-hide-until-ready="">
								<span className="availability__label">Availability</span>
								<span
									className="availability__text"
									data-scramble="Currently booking engagements for Q1 2027."
								>
									Currently booking engagements for Q1 2027.
								</span>
							</p>

							<p className="lede" data-split="chars" data-hide-until-ready="">
								I'm Sean Merriam. I design and build for small teams and site
								owners who'd rather not babysit a codebase. Twelve years of
								production software, a book about keeping it running, and three
								services where the work actually lands.
							</p>

							<ul className="cta-row" data-hide-until-ready="">
								<li>
									<a className="cta" href="/services/llm-integrations">
										<span className="cta__text">LLM Integrations</span>
										<span className="cta__arrow" aria-hidden="true">
											↗
										</span>
									</a>
								</li>
								<li>
									<a className="cta" href="/services/wordpress-migrations">
										<span className="cta__text">WordPress Migrations</span>
										<span className="cta__arrow" aria-hidden="true">
											↗
										</span>
									</a>
								</li>
								<li>
									<a className="cta" href="/services/web-development">
										<span className="cta__text">Web Development</span>
										<span className="cta__arrow" aria-hidden="true">
											↗
										</span>
									</a>
								</li>
							</ul>
						</section>

						<div className="ticker" aria-hidden="true">
							<div className="ticker__track" data-ticker="">
								<div className="ticker__set">
									<span>Available Q1 2027</span>
									<span className="ticker__sep">✳</span>
									<span>Design engineer</span>
									<span className="ticker__sep">✳</span>
									<span>Santa Cruz, California</span>
									<span className="ticker__sep">✳</span>
									<span>Twelve years in production</span>
									<span className="ticker__sep">✳</span>
									<span>Production Ready Go</span>
									<span className="ticker__sep">✳</span>
									<span>LLM Integrations</span>
									<span className="ticker__sep">✳</span>
									<span>WordPress Migrations</span>
									<span className="ticker__sep">✳</span>
									<span>Web Development</span>
									<span className="ticker__sep">✳</span>
								</div>
							</div>
						</div>

						<section
							className="section section--about"
							id="about"
							data-section="About"
							data-fx="FX—05"
							data-tech="Scrubbed ink reveal"
						>
							<p className="rule" data-hide-until-ready="">
								<span className="rule__code">FX—05</span>
								<span className="rule__label">Scrubbed ink reveal</span>
							</p>

							<h2
								className="display display--section"
								data-split="lines"
								data-hide-until-ready=""
							>
								Who you'd be working with
							</h2>

							<div className="prose prose--lead">
								<p data-scrub-ink="">
									I started in political science at UC Davis and took the
									systems path instead of the policy one. Twelve years later
									I've shipped production software, published a book on the
									discipline that keeps it running, and spent a lot of that time
									inside codebases somebody else has to live with after I'm
									gone.
								</p>
								<p data-scrub-ink="">
									That last part is why I work this way. I don't hand over a
									mockup and disappear. I hand over something that runs.
								</p>
								<p>
									Right now I'm a software engineer at Kinetic Fintech. I take a
									small number of outside engagements at a time, usually with
									small teams and solo developers, and I work in the open: you
									see the repository, the decisions, and the reasoning behind
									both.
								</p>
							</div>

							<div className="cares">
								<p className="cares__intro" data-hide-until-ready="">
									A few things I care about more than the brief asks for:
								</p>
								<ul className="cares__list">
									<li data-cares="">
										<span className="cares__num" aria-hidden="true">
											01
										</span>
										<span className="cares__text">
											Pages that load fast on a phone with bad signal.
										</span>
									</li>
									<li data-cares="">
										<span className="cares__num" aria-hidden="true">
											02
										</span>
										<span className="cares__text">
											Interfaces that work with a keyboard and a screen reader.
										</span>
									</li>
									<li data-cares="">
										<span className="cares__num" aria-hidden="true">
											03
										</span>
										<span className="cares__text">
											Documentation that answers the question you actually have
											at 2am.
										</span>
									</li>
									<li data-cares="">
										<span className="cares__num" aria-hidden="true">
											04
										</span>
										<span className="cares__text">
											Code you can read six months later.
										</span>
									</li>
								</ul>
							</div>
						</section>

						<section
							className="section section--services"
							id="services"
							data-section="Services"
							data-fx="FX—06"
							data-tech="Per-card split reveals"
						>
							<p className="rule" data-hide-until-ready="">
								<span className="rule__code">FX—06A / 06B / 06C</span>
								<span className="rule__label">
									Elastic chars / masked skew wipe / word roll-up
								</span>
							</p>

							<h2
								className="display display--section"
								data-split="lines"
								data-hide-until-ready=""
							>
								Three things I do
							</h2>
							<p className="section__intro" data-hide-until-ready="">
								Most people arrive with one of three problems. Pick the one that
								sounds like yours.
							</p>

							<div className="services">
								<article className="service" data-service="elastic">
									<p className="service__index">
										<span className="service__num" data-split="chars-num">
											01
										</span>
										<span className="service__of" aria-hidden="true">
											/ 03
										</span>
									</p>
									<h3 className="service__title" data-split="elastic">
										Put a model to work inside your product
									</h3>
									<div className="service__body">
										<p>
											Most teams don't need a chat window bolted onto the side
											of their app. They need a model that drafts, classifies,
											extracts, routes, or summarizes inside the product people
											already use. That's the version I build.
										</p>
										<p>
											I wire in retrieval that returns the right context, give
											the model tools with real boundaries around what happens
											when they fail, and set up an eval suite so you can
											measure whether a prompt change helped or quietly made
											things worse.
										</p>
										<p>
											Works with Anthropic, OpenAI, or an open model, and with
											the MCP servers you already run.
										</p>
									</div>
									<p className="service__fit">
										<em>Good fit if:</em> you have an LLM feature in production
										and nobody can say whether it's working.
									</p>
									<a className="text-link" href="/services/llm-integrations">
										<span data-scramble-hover="">LLM Integrations</span>
										<span aria-hidden="true">↗</span>
									</a>
								</article>

								<article className="service" data-service="wipe">
									<p className="service__index">
										<span className="service__num" data-split="chars-num">
											02
										</span>
										<span className="service__of" aria-hidden="true">
											/ 03
										</span>
									</p>
									<h3 className="service__title" data-split="wipe">
										Get the site off WordPress without losing the pages, the
										links, or the traffic
									</h3>
									<div className="service__body">
										<p>
											WordPress is a fine place to run a blog and an expensive
											place to run anything else. Plugins pile up, every update
											risks breaking a page somebody cares about, and the
											hosting bill grows faster than the traffic does.
										</p>
										<p>
											I move the content and media out, rebuild the front end as
											a fast static or server-rendered site, map every old URL
											to a new one, and check the whole thing on a staging
											domain before anything goes live.
										</p>
										<p>
											You end up with a faster site, a smaller hosting bill, and
											an editor who can publish without calling a developer.
										</p>
									</div>
									<p className="service__fit">
										<em>Good fit if:</em> your site is slow, your hosting bill
										is uncomfortable, or you're afraid to touch it.
									</p>
									<a
										className="text-link"
										href="/services/wordpress-migrations"
									>
										<span data-scramble-hover="">WordPress Migrations</span>
										<span aria-hidden="true">↗</span>
									</a>
								</article>

								<article className="service" data-service="rollup">
									<p className="service__index">
										<span className="service__num" data-split="chars-num">
											03
										</span>
										<span className="service__of" aria-hidden="true">
											/ 03
										</span>
									</p>
									<h3 className="service__title" data-split="rollup">
										Design and build, from the same person
									</h3>
									<div className="service__body">
										<p>
											Most web projects lose their energy in the handoff between
											the designer and the developer. The design gets
											reinterpreted, the edge cases were never specified, and
											the thing you approved isn't quite the thing that ships.
										</p>
										<p>
											I design the interface and build it, so those decisions
											stay connected the whole way through. Astro for
											content-heavy sites, TypeScript frameworks when the work
											is application-shaped, Postgres or SQLite behind anything
											that needs real data.
										</p>
										<p>
											You get a repository you can run and change yourself,
											tests that describe the behavior, and documentation that
											explains how it's put together.
										</p>
									</div>
									<p className="service__fit">
										<em>Good fit if:</em> you need a site or app built, and you
										want one person accountable for it.
									</p>
									<a className="text-link" href="/services/web-development">
										<span data-scramble-hover="">Web Development</span>
										<span aria-hidden="true">↗</span>
									</a>
								</article>
							</div>
						</section>

						<section
							className="section section--process"
							id="process"
							data-section="Process"
							data-fx="FX—07"
							data-tech="Pinned scrubbed headline swap"
						>
							<div className="process" data-process="">
								<div className="process__stage">
									<p className="rule" data-hide-until-ready="">
										<span className="rule__code">FX—07</span>
										<span className="rule__label">
											Pinned scrubbed headline swap
										</span>
									</p>

									<h2
										className="display display--section process__title"
										data-hide-until-ready=""
									>
										Three steps, in this order
									</h2>

									<div className="process__label">
										<span className="process__kicker">How I work</span>
										<span className="process__stepnum" data-stepnum="">
											01
										</span>
									</div>

									<div className="process__panels">
										<div className="process__panel" data-panel="0">
											<h3 className="display display--process">
												Decide what it has to do.
											</h3>
											<p>
												Before anything gets built, we pin down what the thing
												must do and refuse to let any of it mean two things.
												Scope, structure, and sequence, so risk shows up while
												it's still cheap to change.
											</p>
										</div>
										<div className="process__panel" data-panel="1">
											<h3 className="display display--process">
												Build it test-first.
											</h3>
											<p>
												Tests are the contract. If a behavior isn't asserted, it
												isn't specified, and if it isn't specified, nobody knows
												whether it broke. Error handling is explicit, boundaries
												are real, and there are no silent shortcuts.
											</p>
										</div>
										<div className="process__panel" data-panel="2">
											<h3 className="display display--process">
												Hand it over running.
											</h3>
											<p>
												Observability, docs, and a repo you can pick up without
												me in the room. Six of my systems are still in
												production after handover, which is the only score that
												matters to me.
											</p>
										</div>
									</div>

									<ol className="process__steps" data-process-steps="">
										<li className="process__step is-active">
											<span className="process__step-num">01</span>
											<span className="process__step-name">
												Decide what it has to do
											</span>
										</li>
										<li className="process__step">
											<span className="process__step-num">02</span>
											<span className="process__step-name">
												Build it test-first
											</span>
										</li>
										<li className="process__step">
											<span className="process__step-num">03</span>
											<span className="process__step-name">
												Hand it over running
											</span>
										</li>
									</ol>

									<div className="process__ghost" aria-hidden="true">
										<span data-ghost="">01</span>
									</div>
								</div>
							</div>
						</section>

						<section
							className="section section--faq"
							id="faq"
							data-section="FAQ"
							data-fx="FX—08"
							data-tech="Word stagger + blur reveal"
						>
							<p className="rule" data-hide-until-ready="">
								<span className="rule__code">FX—08</span>
								<span className="rule__label">Word stagger + blur reveal</span>
							</p>

							<h2
								className="display display--section"
								data-split="lines"
								data-hide-until-ready=""
							>
								Before you get in touch
							</h2>

							<div className="faq" data-faq="">
								<div className="faq__item">
									<h3 className="faq__q">
										<button
											type="button"
											className="faq__btn"
											aria-expanded="false"
											aria-controls="faq-a-1"
										>
											<span className="faq__num" aria-hidden="true">
												01
											</span>
											<span className="faq__qtext">
												Can you work on just one part of this?
											</span>
											<span className="faq__glyph" aria-hidden="true">
												<i></i>
												<i></i>
											</span>
										</button>
									</h3>
									<div className="faq__a" id="faq-a-1" role="region">
										<div className="faq__a-inner">
											<p>
												Yes. A migration, one LLM feature, or a section of a
												site can be a standalone engagement. The three service
												pages spell out what each one covers on its own.
											</p>
										</div>
									</div>
								</div>

								<div className="faq__item">
									<h3 className="faq__q">
										<button
											type="button"
											className="faq__btn"
											aria-expanded="false"
											aria-controls="faq-a-2"
										>
											<span className="faq__num" aria-hidden="true">
												02
											</span>
											<span className="faq__qtext">Who owns the code?</span>
											<span className="faq__glyph" aria-hidden="true">
												<i></i>
												<i></i>
											</span>
										</button>
									</h3>
									<div className="faq__a" id="faq-a-2" role="region">
										<div className="faq__a-inner">
											<p>
												You do. The repository, the infrastructure, and the
												design files are yours from the start, not at the end of
												a handover.
											</p>
										</div>
									</div>
								</div>

								<div className="faq__item">
									<h3 className="faq__q">
										<button
											type="button"
											className="faq__btn"
											aria-expanded="false"
											aria-controls="faq-a-3"
										>
											<span className="faq__num" aria-hidden="true">
												03
											</span>
											<span className="faq__qtext">
												Do you work with existing WordPress sites?
											</span>
											<span className="faq__glyph" aria-hidden="true">
												<i></i>
												<i></i>
											</span>
										</button>
									</h3>
									<div className="faq__a" id="faq-a-3" role="region">
										<div className="faq__a-inner">
											<p>
												That's most of what I do. The migration page covers how
												the content, URLs, and search traffic come along for the
												ride.
											</p>
										</div>
									</div>
								</div>

								<div className="faq__item">
									<h3 className="faq__q">
										<button
											type="button"
											className="faq__btn"
											aria-expanded="false"
											aria-controls="faq-a-4"
										>
											<span className="faq__num" aria-hidden="true">
												04
											</span>
											<span className="faq__qtext">
												Do you do design-only or build-only work?
											</span>
											<span className="faq__glyph" aria-hidden="true">
												<i></i>
												<i></i>
											</span>
										</button>
									</h3>
									<div className="faq__a" id="faq-a-4" role="region">
										<div className="faq__a-inner">
											<p>
												Usually neither alone. The value is in keeping design
												and engineering in the same head, so I'll push back if
												that split makes the project worse.
											</p>
										</div>
									</div>
								</div>

								<div className="faq__item">
									<h3 className="faq__q">
										<button
											type="button"
											className="faq__btn"
											aria-expanded="false"
											aria-controls="faq-a-5"
										>
											<span className="faq__num" aria-hidden="true">
												05
											</span>
											<span className="faq__qtext">What stack do you use?</span>
											<span className="faq__glyph" aria-hidden="true">
												<i></i>
												<i></i>
											</span>
										</button>
									</h3>
									<div className="faq__a" id="faq-a-5" role="region">
										<div className="faq__a-inner">
											<p>
												Go and Rust for services, TypeScript for the interfaces
												people touch, Astro for content sites, Postgres or
												SQLite for data. I'll tell you why I'm recommending a
												thing instead of listing a menu.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section
							className="section section--closing"
							id="closing"
							data-section="Closing"
							data-fx="FX—09"
							data-tech="Gradient sweep across characters"
						>
							<p className="rule" data-hide-until-ready="">
								<span className="rule__code">FX—09</span>
								<span className="rule__label">
									Gradient sweep across characters
								</span>
							</p>

							<h2
								className="display display--closing"
								data-split="sweep"
								data-hide-until-ready=""
							>
								Pick the one that sounds like your problem
							</h2>

							<ul className="closing__links">
								<li>
									<a
										className="closing__link"
										href="/services/llm-integrations"
									>
										<span className="closing__num" aria-hidden="true">
											01
										</span>
										<span className="closing__name">LLM Integrations</span>
										<span className="closing__arrow" aria-hidden="true">
											↗
										</span>
									</a>
								</li>
								<li>
									<a
										className="closing__link"
										href="/services/wordpress-migrations"
									>
										<span className="closing__num" aria-hidden="true">
											02
										</span>
										<span className="closing__name">WordPress Migrations</span>
										<span className="closing__arrow" aria-hidden="true">
											↗
										</span>
									</a>
								</li>
								<li>
									<a className="closing__link" href="/services/web-development">
										<span className="closing__num" aria-hidden="true">
											03
										</span>
										<span className="closing__name">Web Development</span>
										<span className="closing__arrow" aria-hidden="true">
											↗
										</span>
									</a>
								</li>
							</ul>

							<p className="closing__note" data-hide-until-ready="">
								Each page ends with its own way to start.
							</p>
						</section>

						<section
							className="section section--fx"
							id="fx-index"
							data-section="Motion index"
							data-fx="FX—00"
							data-tech="Replayable specimens"
						>
							<p className="rule" data-hide-until-ready="">
								<span className="rule__code">FX—00</span>
								<span className="rule__label">Replayable specimens</span>
							</p>

							<h2
								className="display display--section"
								data-split="lines"
								data-hide-until-ready=""
							>
								Motion index
							</h2>
							<p className="section__intro" data-hide-until-ready="">
								Ten text techniques run across this page. Eight are replayable
								here — press a button, or hover a specimen. The marquee, the
								pinned step swap, the FAQ reveal and the footer cascade play as
								you scroll.
							</p>

							<div className="fx-grid">
								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—01</span>
										<span className="fx-card__tech">Scramble decode</span>
									</p>
									<p className="fx-card__demo" data-demo="scramble">
										production ready go
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="scramble"
									>
										Replay
									</button>
								</article>

								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—02</span>
										<span className="fx-card__tech">Masked line reveal</span>
									</p>
									<p className="fx-card__demo" data-demo="mask">
										Lines rise from a clipped mask
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="mask"
									>
										Replay
									</button>
								</article>

								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—03</span>
										<span className="fx-card__tech">Word blur cascade</span>
									</p>
									<p className="fx-card__demo" data-demo="blur">
										Soft focus, letter by letter
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="blur"
									>
										Replay
									</button>
								</article>

								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—06B</span>
										<span className="fx-card__tech">Masked skew wipe</span>
									</p>
									<p className="fx-card__demo" data-demo="wipe">
										The page moves out, the new one in
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="wipe"
									>
										Replay
									</button>
								</article>

								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—09</span>
										<span className="fx-card__tech">Gradient sweep</span>
									</p>
									<p className="fx-card__demo" data-demo="sweep">
										A highlight travels the line
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="sweep"
									>
										Replay
									</button>
								</article>

								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—06A</span>
										<span className="fx-card__tech">Elastic char pop</span>
									</p>
									<p className="fx-card__demo" data-demo="elastic">
										Overshoot, then settle
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="elastic"
									>
										Replay
									</button>
								</article>

								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—06C</span>
										<span className="fx-card__tech">Word roll-up</span>
									</p>
									<p className="fx-card__demo" data-demo="rollup">
										Words roll out of the baseline
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="rollup"
									>
										Replay
									</button>
								</article>

								<article className="fx-card">
									<p className="fx-card__meta">
										<span className="fx-card__code">FX—05</span>
										<span className="fx-card__tech">Scrubbed ink</span>
									</p>
									<p className="fx-card__demo" data-demo="ink">
										Words darken as you read
									</p>
									<button
										type="button"
										className="fx-card__btn"
										data-replay="ink"
									>
										Replay
									</button>
								</article>
							</div>
						</section>
					</main>

					<footer
						className="footer"
						data-section="Footer"
						data-fx="FX—10"
						data-tech="Char cascade / hover scramble"
					>
						<p className="rule" data-hide-until-ready="">
							<span className="rule__code">FX—10</span>
							<span className="rule__label">Char cascade / hover scramble</span>
						</p>

						<p
							className="footer__brand"
							data-split="chars"
							data-hide-until-ready=""
						>
							Sean Merriam
						</p>

						<p className="footer__line" data-hide-until-ready="">
							Design engineer · Santa Cruz, California · Remote-friendly
						</p>

						<ul className="footer__links" data-hide-until-ready="">
							<li>
								<a href="mailto:hello@seanmerriam.com">Email</a>
							</li>
							<li>
								<a href="https://github.com/seanrobmerriam">GitHub</a>
							</li>
							<li>
								<a href="https://x.com/rusty_yachts">X</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/sean-merriam-057a243ba">
									LinkedIn
								</a>
							</li>
							<li>
								<a href="https://work.seanmerriam.com/">Selected work</a>
							</li>
							<li>
								<a href="https://github.com/seanrobmerriam/Production-Ready-Go">
									Production Ready Go
								</a>
							</li>
						</ul>

						<p className="footer__legal" data-hide-until-ready="">
							© 2026 Sean Merriam. All rights reserved.
						</p>
					</footer>
				</div>
			</div>
		</>
	);
}
