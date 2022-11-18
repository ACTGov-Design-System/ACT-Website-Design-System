import { createPC31 } from "./component";

export default {
	title: "Patterns/Content/Example 1",
	decorators: [(Story) => `
		<div class="act-flex">
			<div class="act-flex__container">
				<div class="act-flex__grid">
					<div class="act-flex__row">
						<div class="act-col__cw-8">
							${Story()}
						</div>
					</div>
				</div>
			</div>
		</div>
	`,],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPC31(args);

export const Default = Template.bind({});
