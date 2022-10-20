import { createP11 } from "./component";

export default {
	title: "Patterns/Page Banners/In Page Banner",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		heading1: {
			control: { type: "text", },
			defaultValue: "Motor vehicle registration and renewal",
			description: "Sets the heading value",
		},
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

const Template = (args) => createP11(args);

export const Default = Template.bind({});
