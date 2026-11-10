export function Navbar() {
	return (
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
	);
}
