import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { LandingPage } from "../components/landing-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	useEffect(() => {
		let cancelled = false;
		let cleanup: (() => void) | undefined;
		import("../lib/landing-animations.js").then(({ initializeLandingPage }) => {
			if (!cancelled) cleanup = initializeLandingPage();
		});
		return () => {
			cancelled = true;
			cleanup?.();
		};
	}, []);

	return <LandingPage />;
}
