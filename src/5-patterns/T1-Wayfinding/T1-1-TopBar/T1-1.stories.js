import { createT11 } from './component';

export default {
  title: 'Patterns/Wayfinding/TopBar',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

const Template = (args) => createT11(args);

export const Default = Template.bind({});
Default.args = {
	title: "An ACT Government Website",
};
