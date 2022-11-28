import { createPC31 } from "./component";

export default {
	title: "Patterns/Content/Example 1",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPC31(args);

export const Example1 = Template.bind({});
