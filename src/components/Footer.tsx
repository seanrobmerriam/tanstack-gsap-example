export function Footer() {
	return (
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

			<p className="footer__brand" data-split="chars" data-hide-until-ready="">
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
	);
}
