import { createB41 } from '../B4-1-Primary-Button/component';

export default {
  title: 'Components/Buttons/Secondary',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

const Template = (args) => createB41(args);

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
	type: "secondary",
	size: "default",
	icon: "",
	label: "Secondary Button",
};
export const SecondaryDefaultIconLeft = Template.bind({});
SecondaryDefaultIconLeft.args = {
	type: "secondary",
	size: "default",
	icon: "icon-left",
	label: "Secondary Button",
};
export const SecondaryDefaultIconRight = Template.bind({});
SecondaryDefaultIconRight.args = {
	type: "secondary",
	size: "default",
	icon: "icon-right",
	label: "Secondary Button",
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
	type: "secondary",
	size: "large",
	icon: "",
	label: "Secondary Button",
};
export const SecondaryLargeIconLeft = Template.bind({});
SecondaryLargeIconLeft.args = {
	type: "secondary",
	size: "large",
	icon: "icon-left",
	label: "Secondary Button",
};
export const SecondaryLargeIconRight = Template.bind({});
SecondaryLargeIconRight.args = {
	type: "secondary",
	size: "large",
	icon: "icon-right",
	label: "Secondary Button",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
	type: "secondary",
	size: "small",
	icon: "",
	label: "Secondary Button",
};
export const SecondarySmallIconLeft = Template.bind({});
SecondarySmallIconLeft.args = {
	type: "secondary",
	size: "small",
	icon: "icon-left",
	label: "Secondary Button",
};
export const SecondarySmallIconRight = Template.bind({});
SecondarySmallIconRight.args = {
	type: "secondary",
	size: "small",
	icon: "icon-right",
	label: "Secondary Button",
};

export const SecondaryXsmall = Template.bind({});
SecondaryXsmall.args = {
	type: "secondary",
	size: "xsmall",
	icon: "",
	label: "Secondary Button",
};
export const SecondaryXsmallIconLeft = Template.bind({});
SecondaryXsmallIconLeft.args = {
	type: "secondary",
	size: "xsmall",
	icon: "icon-left",
	label: "Secondary Button",
};
export const SecondaryXsmallIconRight = Template.bind({});
SecondaryXsmallIconRight.args = {
	type: "secondary",
	size: "xsmall",
	icon: "icon-right",
	label: "Secondary Button",
};


