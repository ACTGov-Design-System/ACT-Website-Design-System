import { createF20 } from "./component";

export default {
	title: "Components/Form Elements/Form Structure",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createF20(args);

export const FormStructure = Template.bind({});
