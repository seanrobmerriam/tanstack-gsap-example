export function Services() {
	return (
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
				Most people arrive with one of three problems. Pick the one that sounds
				like yours.
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
							Most teams don't need a chat window bolted onto the side of their
							app. They need a model that drafts, classifies, extracts, routes,
							or summarizes inside the product people already use. That's the
							version I build.
						</p>
						<p>
							I wire in retrieval that returns the right context, give the model
							tools with real boundaries around what happens when they fail, and
							set up an eval suite so you can measure whether a prompt change
							helped or quietly made things worse.
						</p>
						<p>
							Works with Anthropic, OpenAI, or an open model, and with the MCP
							servers you already run.
						</p>
					</div>
					<p className="service__fit">
						<em>Good fit if:</em> you have an LLM feature in production and
						nobody can say whether it's working.
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
						Get the site off WordPress without losing the pages, the links, or
						the traffic
					</h3>
					<div className="service__body">
						<p>
							WordPress is a fine place to run a blog and an expensive place to
							run anything else. Plugins pile up, every update risks breaking a
							page somebody cares about, and the hosting bill grows faster than
							the traffic does.
						</p>
						<p>
							I move the content and media out, rebuild the front end as a fast
							static or server-rendered site, map every old URL to a new one,
							and check the whole thing on a staging domain before anything goes
							live.
						</p>
						<p>
							You end up with a faster site, a smaller hosting bill, and an
							editor who can publish without calling a developer.
						</p>
					</div>
					<p className="service__fit">
						<em>Good fit if:</em> your site is slow, your hosting bill is
						uncomfortable, or you're afraid to touch it.
					</p>
					<a className="text-link" href="/services/wordpress-migrations">
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
							Most web projects lose their energy in the handoff between the
							designer and the developer. The design gets reinterpreted, the
							edge cases were never specified, and the thing you approved isn't
							quite the thing that ships.
						</p>
						<p>
							I design the interface and build it, so those decisions stay
							connected the whole way through. Astro for content-heavy sites,
							TypeScript frameworks when the work is application-shaped,
							Postgres or SQLite behind anything that needs real data.
						</p>
						<p>
							You get a repository you can run and change yourself, tests that
							describe the behavior, and documentation that explains how it's
							put together.
						</p>
					</div>
					<p className="service__fit">
						<em>Good fit if:</em> you need a site or app built, and you want one
						person accountable for it.
					</p>
					<a className="text-link" href="/services/web-development">
						<span data-scramble-hover="">Web Development</span>
						<span aria-hidden="true">↗</span>
					</a>
				</article>
			</div>
		</section>
	);
}
