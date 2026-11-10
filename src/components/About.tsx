export function About() {
	return (
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
					I started in political science at UC Davis and took the systems path
					instead of the policy one. Twelve years later I've shipped production
					software, published a book on the discipline that keeps it running,
					and spent a lot of that time inside codebases somebody else has to
					live with after I'm gone.
				</p>
				<p data-scrub-ink="">
					That last part is why I work this way. I don't hand over a mockup and
					disappear. I hand over something that runs.
				</p>
				<p>
					Right now I'm a software engineer at Kinetic Fintech. I take a small
					number of outside engagements at a time, usually with small teams and
					solo developers, and I work in the open: you see the repository, the
					decisions, and the reasoning behind both.
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
							Documentation that answers the question you actually have at 2am.
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
	);
}
