import { createC11 } from "./component";

export default {
	title: "Components/Cards/Default",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["primary", "secondary", "tertiary", "homepage",],
			defaultValue: "primary",
			description: "Sets the card type",
			table: {
				defaultValue: {
					summary: "primary",
				},
			},
		},
		feature: {
			control: { type: "radio", },
			options: ["image", "icon", "none",],
			defaultValue: "image",
			description: "Sets the card feature element",
			table: {
				defaultValue: {
					summary: "image",
				},
			},
		},
		icon: {
			control: { type: "text", },
			defaultValue: "fa-pizza-slice",
			description: "Sets the card icon",
			table: {
				defaultValue: {
					summary: "fa-pizza-slice",
				},
			},
		},
		dateVisible: {
			control: { type: "boolean", },
			defaultValue: false,
			description: "Sets the card date element",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		tagVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the card tag element",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		tag1: {
			control: { type: "text", },
			defaultValue: "Gamburra",
			description: "Flowers",
			table: {
				defaultValue: {
					summary: "Gamburra",
				},
			},
		},
		tag2: {
			control: { type: "text", },
			defaultValue: "Mulleun",
			description: "Eagle",
			table: {
				defaultValue: {
					summary: "Mulleun",
				},
			},
		},
		header: {
			control: { type: "text", },
			defaultValue: "Card Header",
			description: "Sets the card headline",
			table: {
				defaultValue: {
					summary: "Card Header",
				},
			},
		},
		description: {
			control: { type: "text", },
			defaultValue: "Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
			description: "Sets the card description",
			table: {
				defaultValue: {
					summary: "Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
				},
			},
		},
		ctaVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the card CTA element",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		ctaText: {
			control: { type: "text", },
			defaultValue: "Learn more",
			description: "Sets the card CTA text",
			table: {
				defaultValue: {
					summary: "Learn more",
				},
			},
		},
	},
};

const Template = (args) => createC11(args);

export const Default = Template.bind({});
