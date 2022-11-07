import { createT11 } from "./component";

export default {
	title: "Components/Tables",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["primary", "secondary",],
			defaultValue: "primary",
			description: "Sets the table type",
			table: {
				defaultValue: {
					summary: "primary",
				},
			},
		},
	},
};

const Template = (args) => createT11(args);

export const Table = Template.bind({});
