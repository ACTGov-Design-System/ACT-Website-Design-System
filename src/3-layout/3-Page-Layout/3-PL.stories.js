import { create3P } from "./component";

export default {
	title: "Layout/Page Layout",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => create3P(args);

export const Grid = Template.bind({});
Grid.args = {

};
