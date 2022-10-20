import { createA11 } from "./component";

export default {
	title: "Components/Accordion/Default",
	decorators: [(story) => `${story()}`,],
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createA11(args);

export const Default = Template.bind({});
Default.args = {
	type: "--default",
	label: "Default",
};
