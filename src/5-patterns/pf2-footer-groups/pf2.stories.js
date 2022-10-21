import { createPF2 } from "./component";

export default {
	title: "Patterns/Footers",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createPF2(args);

export const Default = Template.bind({});
