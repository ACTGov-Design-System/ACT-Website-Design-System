import { createAC1 } from "./component";

export default {
	title: "Previews/Access Canberra",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createAC1(args);

export const Default = Template.bind({});
