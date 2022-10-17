import { createB41 } from '../B4-1-Primary-Button/component';

export default {
  title: 'Components/Buttons/Inline',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

const Template = (args) => createB41(args);

export const InlineDefault = Template.bind({});
InlineDefault.args = {
	type: "inline",
	size: "default",
	icon: "",
	label: "Inline Link",
};
