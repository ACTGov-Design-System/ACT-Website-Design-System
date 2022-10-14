import { createA22 } from './component';

export default {
  title: 'Components/Alerts/InPage',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

const Template = (args) => createA22(args);

export const Success = Template.bind({});
Success.args = {
	type: "--success",
	label: "Success",
};
export const Warning = Template.bind({});
Warning.args = {
	type: "--warning",
	label: "Warning",
};
export const Error = Template.bind({});
Error.args = {
	type: "--error",
	label: "Error",
};
