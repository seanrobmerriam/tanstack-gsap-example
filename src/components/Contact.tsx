export function Contact() {
	return (
		<section
			className="section section--closing"
			id="closing"
			data-section="Closing"
			data-fx="FX—09"
			data-tech="Gradient sweep across characters"
		>
			<p className="rule" data-hide-until-ready="">
				<span className="rule__code">FX—09</span>
				<span className="rule__label">Gradient sweep across characters</span>
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
					<a className="closing__link" href="/services/llm-integrations">
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
					<a className="closing__link" href="/services/wordpress-migrations">
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
	);
}
