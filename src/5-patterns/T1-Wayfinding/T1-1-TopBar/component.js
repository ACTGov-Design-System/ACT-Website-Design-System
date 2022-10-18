import { createB41 } from '../../../4-components/B4-Buttons/B4-1-Primary-Button/component';
import { createL22 } from '../../../4-components/L2-Logos/L2-2-Cobranded-Logo/component';
import { createF11 } from '../../../4-components/F1-Footers/F1-1-Footer-AoC/component';
import { createM31 } from '../../../4-components/M3-Masthead/M3-1-Masthead/component';
import { createW16 } from '../../../4-components/W1-Wayfinding/W1-6-NavBar/component';


export const createT11 = ({}) => {

	const mastheadHTML = createM31({
		title: "An ACT Government Website",
		buttonText: "Log In"
	});
	const navbarHTML = createW16({
		title: "An ACT Government Website1",
	});
	const aocHTML = createF11({});

	const topbarHTML = mastheadHTML + navbarHTML + aocHTML;

	const topbar = document.createElement('div');
	topbar.className = 'sb-act-topbar';
	topbar.innerHTML = topbarHTML;
	const topbarExport = topbar.innerHTML;
	return topbarExport;

};
