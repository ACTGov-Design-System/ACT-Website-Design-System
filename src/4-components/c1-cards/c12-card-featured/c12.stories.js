import { createC12 } from "./component";

export default {
	title: "Components/Cards/Featured",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createC12(args);

export const Featured = Template.bind({});
