import { createPC31 } from "./component";

export default {
	title: "Patterns/Content/ContentArticle",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPC31(args);

export const ContentArticle = Template.bind({});
