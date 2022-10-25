import { createF12 } from "./component";

export default {
	title: "Components/Footers/AoC",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createF12(args);

export const Default = Template.bind({});
