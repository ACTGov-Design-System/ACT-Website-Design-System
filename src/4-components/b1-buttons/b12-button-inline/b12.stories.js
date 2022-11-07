import { createB12 } from "./component";

export default {
	title: "Components/Buttons",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		text: {
			control: { type: "text", },
			defaultValue: "yerradhang",
			description: "Sets the link text",
			table: {
				defaultValue: {
					summary: "yerradhang",
					detail: "eucalyptus tree",
				},
			},
		},
		link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link destination",
			table: {
				defaultValue: {
					summary: "#",
				},
			},
		},
		external: {
			control: { type: "radio", },
			options: ["internal link", "external link",],
			defaultValue: "external link",
			description: "Sets the link extension",
			table: {
				defaultValue: {
					summary: "external link",
				},
			},
		},
	},
};

const Template = (args) => createB12(args);

export const Inline = Template.bind({});
