import { createW12 } from "./component.js";

export default {
	title: "Components/Wayfinding/NavBar",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createW12(args);

export const Default = Template.bind({});
Default.args = {
	title: "An ACT Government Website",
};
