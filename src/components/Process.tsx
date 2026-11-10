export function Process() {
	return (
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
						<span className="rule__label">Pinned scrubbed headline swap</span>
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
								Before anything gets built, we pin down what the thing must do
								and refuse to let any of it mean two things. Scope, structure,
								and sequence, so risk shows up while it's still cheap to change.
							</p>
						</div>
						<div className="process__panel" data-panel="1">
							<h3 className="display display--process">Build it test-first.</h3>
							<p>
								Tests are the contract. If a behavior isn't asserted, it isn't
								specified, and if it isn't specified, nobody knows whether it
								broke. Error handling is explicit, boundaries are real, and
								there are no silent shortcuts.
							</p>
						</div>
						<div className="process__panel" data-panel="2">
							<h3 className="display display--process">
								Hand it over running.
							</h3>
							<p>
								Observability, docs, and a repo you can pick up without me in
								the room. Six of my systems are still in production after
								handover, which is the only score that matters to me.
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
							<span className="process__step-name">Build it test-first</span>
						</li>
						<li className="process__step">
							<span className="process__step-num">03</span>
							<span className="process__step-name">Hand it over running</span>
						</li>
					</ol>

					<div className="process__ghost" aria-hidden="true">
						<span data-ghost="">01</span>
					</div>
				</div>
			</div>
		</section>
	);
}
