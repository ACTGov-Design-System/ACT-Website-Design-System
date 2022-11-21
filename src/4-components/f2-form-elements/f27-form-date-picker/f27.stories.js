import { createF27 } from "./component";

export default {
	title: "Components/Form Elements/Date Picker",
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
			control: { type: "select", },
			options: ["text","password","date","email","tel","url",],
			defaultValue: "date",
			description: "Sets the input type",
			table: {
				defaultValue: {
					summary: "date",
				},
			},
		},
		width: {
			control: { type: "select", },
			options: ["25%","33%","50%","66%","75%","100%",],
			defaultValue: "33%",
			description: "Sets the input width",
			table: {
				defaultValue: {
					summary: "66%",
				},
			},
		},
		label: {
			control: { type: "text", },
			defaultValue: "Field Label",
			description: "Sets the input label",
			table: {
				defaultValue: {
					summary: "Field Label",
				},
			},
		},
		required: {
			control: { type: "boolean", },
			defaultValue: false,
			description: "Sets the input label",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		pseudoClass: {
			control: { type: "select", },
			options: ["default","focus","disabled","read-only",],
			defaultValue: "default",
			description: "Sets the input pseudoclass",
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
		value: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the input value",
			table: {
				defaultValue: {
					summary: "",
				},
			},
		},
		placeholder: {
			control: { type: "text", },
			defaultValue: "Placeholder Text",
			description: "Sets the input placeholder",
			table: {
				defaultValue: {
					summary: "Placeholder Text",
				},
			},
		},
	},
};

const Template = (args) => createF27(args);

export const Default = Template.bind({});
