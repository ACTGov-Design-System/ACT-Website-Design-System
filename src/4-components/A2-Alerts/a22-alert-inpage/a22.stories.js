import { createA22 } from "./component";

export default {
	title: "Components/Alerts/In Page Alert",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
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
			defaultValue: "fa-circle-info",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "fa-circle-info",
				},
			},
		},
		alert: {
			control: { type: "text", },
			defaultValue: "Learner licence information",
			description: "Sets the alert text",
		},
		description: {
			control: { type: "text", },
			defaultValue: "To assist customers having difficulty attending an Access Canberra Service centre at this time car and motorcycle learner licences that expired between 31 January and 31 March 2022 have now been extended by six months.",
			description: "Sets the alert description",
		},
	},
};

const Template = (args) => createA22(args);

export const Default = Template.bind({});
