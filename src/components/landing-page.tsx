import { ScrollProgress } from "./ScrollProgress";
import { SpecRail } from "./SpecRail";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Ticker } from "./Ticker";
import { About } from "./About";
import { Services } from "./Services";
import { Process } from "./Process";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { MotionIndex } from "./MotionIndex";
import { Footer } from "./Footer";

export function LandingPage() {
	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>

			<ScrollProgress />

			<div className="sheet">
				<SpecRail />

				<div className="body">
					<Navbar />

					<main id="main">
						<Hero />

						<Ticker />

						<About />

						<Services />

						<Process />

						<FAQ />

						<Contact />

						<MotionIndex />
					</main>

					<Footer />
				</div>
			</div>
		</>
	);
}
