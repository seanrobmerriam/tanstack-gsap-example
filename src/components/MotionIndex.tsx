export function MotionIndex() {
	return (
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
				Ten text techniques run across this page. Eight are replayable here —
				press a button, or hover a specimen. The marquee, the pinned step swap,
				the FAQ reveal and the footer cascade play as you scroll.
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
					<button type="button" className="fx-card__btn" data-replay="scramble">
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
					<button type="button" className="fx-card__btn" data-replay="mask">
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
					<button type="button" className="fx-card__btn" data-replay="blur">
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
					<button type="button" className="fx-card__btn" data-replay="wipe">
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
					<button type="button" className="fx-card__btn" data-replay="sweep">
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
					<button type="button" className="fx-card__btn" data-replay="elastic">
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
					<button type="button" className="fx-card__btn" data-replay="rollup">
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
					<button type="button" className="fx-card__btn" data-replay="ink">
						Replay
					</button>
				</article>
			</div>
		</section>
	);
}
