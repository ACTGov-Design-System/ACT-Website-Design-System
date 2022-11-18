import { createC23 } from "./component";

export default {
	title: "Components/Content/Quote",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		content: {
			control: { type: "text", },
			defaultValue: "Et harum quidem rerum facilis est et expedita distinctio.",
			description: "Sets the breaker content",
			table: {
				defaultValue: {
					summary: "Et harum quidem rerum facilis est et expedita distinctio.",
				},
			},
		},
	},
};

const Template = (args) => createC23(args);

export const Default = Template.bind({});
