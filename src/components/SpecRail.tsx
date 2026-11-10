export function SpecRail() {
	return (
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
	);
}
