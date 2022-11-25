import { createW15 } from "./component.js";

export default {
	title: "Components/Wayfinding/Mega Menu",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createW15(args);

export const MegaMenu = Template.bind({});
