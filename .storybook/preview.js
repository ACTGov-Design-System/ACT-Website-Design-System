import "./public/style/preview.scss"; 		// Custom styles for Storybook UI

export const parameters = {
  actions: {
		argTypesRegex: "^on[A-Z].*",
	},
	options: {
		storySort: { // Set the order of stories/pages in the sidebar
			method: "alphabetical",
			order: [
				"Overview",
				[
					"Introduction",
					"Our ecosystem",
					"Roles & responsibilities",
					"Changes & updates",
				],
				"Guidelines",
				[
					"Glossary",
					"Accessibility",
					"Branding",
					"Content",
				],
				"Design Tokens",
				[
					"Overview",
				],
				"Layout",
				[
					"Overview",
				],
				"Components",
				[
					"Overview",
				],
				"Patterns",
				[
					"Overview",
				],
				"Previews",
				[
					"Overview",
				],
			],
		},
	},
	previewTabs: {
		canvas: {
			title: "Toolkit", // Rename 'Canvas' tab for readability
		},
		"storybook/docs/panel": {
			index: -2, // Moves 'Docs' in front of 'Canvas/Toolkit', viewMode adjusts the actual load order
			title: "Docs",
		},
	},
	// Creates custom component statuses, useful for marking component lifecycle within Storybook UI
	// https://storybook.js.org/addons/@etchteam/storybook-addon-status/
	status: {
		statuses: {
			core: {
				background: "#472D8C",
				color: "#FFFFFF",
				description: "This is a core design system component",
			},
			expressive: {
				background: "#008FC5",
				color: "#FFFFFF",
				description: "This is an expressive design system component",
			},
			production: {
				background: "#098660",
				color: "#FFFFFF",
				description: "This is a production component and can be used on sites",
			},
			staging: {
				background: "#F15F50",
				color: "#FFFFFF",
				description: "This is a staging component and is not ready to be used",
			},
			obsolete: {
				background: "#BA2133",
				color: "#FFFFFF",
				description: "This is an obsolete component and should be removed from sites",
			},
		},
	},
	toolbar: {
		dynamicTitle: true,
		icon: "circlehollow",
		showName: true,
	},
	viewMode: "docs", // Sets 'Docs' as the default tab on page load, previewTabs adjusts the UI to match
}
