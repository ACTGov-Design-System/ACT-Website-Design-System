import { createF20 } from "./component";

export default {
	title: "Components/Form Elements/Structure",
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

export const Default = Template.bind({});
