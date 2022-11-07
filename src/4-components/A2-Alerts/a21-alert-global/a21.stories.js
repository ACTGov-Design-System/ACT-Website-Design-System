import { createA21 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const component = {
	id: "A21",
	type: "Component",
	category: "Alerts",
	name: "Global Alert",
	section: "-",
	status:	directory.A21.status,
	version: "1",
	description: "Used to draw attention to important information for the user globally",
	usage: `
		<ul>
			<li>Do not stack Global Alerts, limit of one per page</li>
			<li>Global Alert must be placed above the masthead</li>
			<li>Use the relevant variant</li>
			<li>Keep alert text short and succinct (should be no longer than one sentence)</li>
			<li>Text should to relevant content</li>
		</ul>
	`,
};
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+component.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+component.id+`</code></td>
			</tr>
			<tr>
				<td>Component Version</td>
				<td><code>`+component.version+`</code></td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+component.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+component.usage+`</td>
			</tr>
			<tr>
				<td>Links</td>
				<td>
					<a href="" target="_blank">Figma</a>&nbsp;&nbsp;
					<a href="" target="_blank">GitHub</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+component.type+` Preview</h2>
`;

export default {
	title: "Components/Alerts/Global Alert",
	parameters: {
		docs: {
			description: {
				component: "<div>" + componentDescription + "</div>",
			},
		},
		layout: "fullscreen",
		status: {
			type: component.status,
		},
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["success", "warning", "error",],
			defaultValue: "success",
			description: "Sets the alert type",
			table: {
				defaultValue: {
					summary: "success",
				},
			},
		},
		dismissible: {
			control: "boolean",
			defaultValue: true,
			description: "Sets the alerts persistance",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		icon: {
			control: { type: "radio", },
			options: ["no-icon", "icon-left",],
			defaultValue: "icon-left",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "icon-left",
				},
			},
		},
		fontawesome: {
			control: { type: "text", },
			defaultValue: "fa-leaf",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "fa-leaf",
				},
			},
		},
		alert: {
			control: { type: "text", },
			defaultValue: "Free registration for zero emission vehicles for two years",
			description: "Sets the alert text",
		},
	},
};

const Template = (args) => createA21(args);

export const Default = Template.bind({});
