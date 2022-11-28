import { createW16 } from "./component";

export default {
	title: "Components/Wayfinding/Breadcrumbs",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
		docs: {
			description: "Test",
		},
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		crumb1: {
			control: { type: "text", },
			defaultValue: "Crumb One",
			description: "Sets the value for Crumb #1",
		},
		crumb1link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link for Crumb #1",
		},
		crumb2: {
			control: { type: "text", },
			defaultValue: "Crumb Two",
			description: "Sets the value for Crumb #2",
		},
		crumb2link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link for Crumb #2",
		},
		crumb3: {
			control: { type: "text", },
			defaultValue: "Crumb Three",
			description: "Sets the value for Crumb #3",
		},
		crumb3link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link for Crumb #3",
		},
		crumb4: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the value for Crumb #4",
		},
		crumb4link: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the link for Crumb #4",
		},
		crumb5: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the value for Crumb #5",
		},
		crumb5link: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the link for Crumb #5",
		},
	},
};

const Template = (args) => createW16(args);

export const Breadcrumbs = Template.bind({});
