import { createB41 } from './component';

export default {
  title: 'Components/Buttons/Primary',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

const Template = (args) => createB41(args);

export const Default = Template.bind({});
Default.args = {
	type: "primary",
	size: "default",
	icon: "",
	label: "Primary Button",
};
export const DefaultIconLeft = Template.bind({});
DefaultIconLeft.args = {
	type: "primary",
	size: "default",
	icon: "icon-left",
	label: "Primary Button",
};
export const DefaultIconRight = Template.bind({});
DefaultIconRight.args = {
	type: "primary",
	size: "default",
	icon: "icon-right",
	label: "Primary Button",
};

export const Large = Template.bind({});
Large.args = {
	type: "primary",
	size: "large",
	icon: "",
	label: "Primary Button",
};
export const LargeIconLeft = Template.bind({});
LargeIconLeft.args = {
	type: "primary",
	size: "large",
	icon: "icon-left",
	label: "Primary Button",
};
export const LargeIconRight = Template.bind({});
LargeIconRight.args = {
	type: "primary",
	size: "large",
	icon: "icon-right",
	label: "Primary Button",
};

export const Small = Template.bind({});
Small.args = {
	type: "primary",
	size: "small",
	icon: "",
	label: "Primary Button",
};
export const SmallIconLeft = Template.bind({});
SmallIconLeft.args = {
	type: "primary",
	size: "small",
	icon: "icon-left",
	label: "Primary Button",
};
export const SmallIconRight = Template.bind({});
SmallIconRight.args = {
	type: "primary",
	size: "small",
	icon: "icon-right",
	label: "Primary Button",
};

export const Xsmall = Template.bind({});
Xsmall.args = {
	type: "primary",
	size: "xsmall",
	icon: "",
	label: "Primary Button",
};
export const XsmallIconLeft = Template.bind({});
XsmallIconLeft.args = {
	type: "primary",
	size: "xsmall",
	icon: "icon-left",
	label: "Primary Button",
};
export const XsmallIconRight = Template.bind({});
XsmallIconRight.args = {
	type: "primary",
	size: "xsmall",
	icon: "icon-right",
	label: "Primary Button",
};


