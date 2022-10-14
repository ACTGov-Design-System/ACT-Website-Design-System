import "./public/style/preview.scss"; 		// Custom styles for Storybook UI

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	docs: {
		inlineStories: true,
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
}
