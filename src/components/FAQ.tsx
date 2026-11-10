export function FAQ() {
	return (
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
								Yes. A migration, one LLM feature, or a section of a site can be
								a standalone engagement. The three service pages spell out what
								each one covers on its own.
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
								You do. The repository, the infrastructure, and the design files
								are yours from the start, not at the end of a handover.
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
								That's most of what I do. The migration page covers how the
								content, URLs, and search traffic come along for the ride.
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
								Usually neither alone. The value is in keeping design and
								engineering in the same head, so I'll push back if that split
								makes the project worse.
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
								Go and Rust for services, TypeScript for the interfaces people
								touch, Astro for content sites, Postgres or SQLite for data.
								I'll tell you why I'm recommending a thing instead of listing a
								menu.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
