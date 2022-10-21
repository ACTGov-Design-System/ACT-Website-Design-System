import { createA21 } from "./component";

// Component Settings
const component = {
	id: "A2",
	name: "Alerts",
	section: "-",
	status: [
		// Component Status First
		"production",
		// Component Style Second
		"core",
	],
	version: "1",
};
const componentDescription = `
	<button>` + component.id + "-" + component.version + `</button>
`;

export default {
	title: "Components/Alerts/Global Alert",
	parameters: {
		docs: {
			description: {
				component: "<div>" + componentDescription + "</div>",
			},
		},
		layout: "fullscreen",
		status: {
			type: component.status,
		},
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["success", "warning", "error",],
			defaultValue: "success",
			description: "Sets the alert type",
			table: {
				defaultValue: {
					summary: "success",
				},
			},
		},
		dismissible: {
			control: "boolean",
			defaultValue: true,
			description: "Sets the alerts persistance",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		icon: {
			control: { type: "radio", },
			options: ["no-icon", "icon-left",],
			defaultValue: "icon-left",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "icon-left",
				},
			},
		},
		fontawesome: {
			control: { type: "text", },
			defaultValue: "fa-leaf",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "fa-leaf",
				},
			},
		},
		alert: {
			control: { type: "text", },
			defaultValue: "Free registration for zero emission vehicles for two years",
			description: "Sets the alert text",
		},
	},
};

const Template = (args) => createA21(args);

export const Default = Template.bind({});
