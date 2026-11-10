import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				name: "description",
				content:
					"I'm Sean Merriam. I design and build for small teams and site owners who'd rather not babysit a codebase. LLM integrations, WordPress migrations, and web development.",
			},
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Sean Merriam — Design engineer · Santa Cruz, CA",
			},
		],
		links: [
			{
				rel: "preload",
				href: "/fonts/archivo-b42cd5.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{ rel: "stylesheet", href: "/fonts/fonts.css" },
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
