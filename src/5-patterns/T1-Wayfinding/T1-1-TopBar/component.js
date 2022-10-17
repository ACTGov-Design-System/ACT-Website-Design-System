import { createB41 } from '../../../4-components/B4-Buttons/B4-1-Primary-Button/component';
import { createL22 } from '../../../4-components/L2-Logos/L2-2-Cobranded-Logo/component';
import { createM31 } from '../../../4-components/M3-Masthead/M3-1-Masthead/component';
import { createW16 } from '../../../4-components/W1-Wayfinding/W1-6-NavBar/component';


export const createT11 = ({
	title,
}) => {

	const mastheadHTML = createM31({
		title: "An ACT Government Website",
	});
	const navbarHTML = createW16({
		title: "An ACT Government Website1",
	});
	const buttonHTML = createB41({
		type: "primary",
		size: "xsmall",
		icon: "no-icon",
		label: "Login",
	});

	const topbarHTML = `
	<div class="act-topbar__container">
			`+
			mastheadHTML
			+
			navbarHTML
			+`
	</div>
		`
		const topbar = document.createElement('div');
		topbar.className = 'act-topbar';
		topbar.innerHTML = topbarHTML;
		const topbarExport = topbar.innerHTML;
		return topbarExport;

};
