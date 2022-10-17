import { createB41 } from '../B4-1-Primary-Button/component';

export default {
  title: 'Components/Buttons/Tertiary',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

const Template = (args) => createB41(args);

export const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
	type: "tertiary",
	size: "default",
	icon: "",
	label: "Tertiary Button",
};
export const TertiaryDefaultIconLeft = Template.bind({});
TertiaryDefaultIconLeft.args = {
	type: "tertiary",
	size: "default",
	icon: "icon-left",
	label: "Tertiary Button",
};
export const TertiaryDefaultIconRight = Template.bind({});
TertiaryDefaultIconRight.args = {
	type: "tertiary",
	size: "default",
	icon: "icon-right",
	label: "Tertiary Button",
};

export const TertiaryLarge = Template.bind({});
TertiaryLarge.args = {
	type: "tertiary",
	size: "large",
	icon: "",
	label: "Tertiary Button",
};
export const TertiaryLargeIconLeft = Template.bind({});
TertiaryLargeIconLeft.args = {
	type: "tertiary",
	size: "large",
	icon: "icon-left",
	label: "Tertiary Button",
};
export const TertiaryLargeIconRight = Template.bind({});
TertiaryLargeIconRight.args = {
	type: "tertiary",
	size: "large",
	icon: "icon-right",
	label: "Tertiary Button",
};

export const TertiarySmall = Template.bind({});
TertiarySmall.args = {
	type: "tertiary",
	size: "small",
	icon: "",
	label: "Tertiary Button",
};
export const TertiarySmallIconLeft = Template.bind({});
TertiarySmallIconLeft.args = {
	type: "tertiary",
	size: "small",
	icon: "icon-left",
	label: "Tertiary Button",
};
export const TertiarySmallIconRight = Template.bind({});
TertiarySmallIconRight.args = {
	type: "tertiary",
	size: "small",
	icon: "icon-right",
	label: "Tertiary Button",
};

export const TertiaryXsmall = Template.bind({});
TertiaryXsmall.args = {
	type: "tertiary",
	size: "xsmall",
	icon: "",
	label: "Tertiary Button",
};
export const TertiaryXsmallIconLeft = Template.bind({});
TertiaryXsmallIconLeft.args = {
	type: "tertiary",
	size: "xsmall",
	icon: "icon-left",
	label: "Tertiary Button",
};
export const TertiaryXsmallIconRight = Template.bind({});
TertiaryXsmallIconRight.args = {
	type: "tertiary",
	size: "xsmall",
	icon: "icon-right",
	label: "Tertiary Button",
};


