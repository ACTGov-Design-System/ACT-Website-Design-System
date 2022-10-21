import { createF13 } from "./component";

export default {
	title: "Components/Footers/Feedback",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createF13(args);

export const Default = Template.bind({});
