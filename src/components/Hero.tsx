export function Hero() {
	return (
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
				I'm Sean Merriam. I design and build for small teams and site owners
				who'd rather not babysit a codebase. Twelve years of production
				software, a book about keeping it running, and three services where the
				work actually lands.
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
	);
}
