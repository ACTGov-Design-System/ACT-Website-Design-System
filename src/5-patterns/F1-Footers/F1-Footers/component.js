import { createF11 } from '../../../4-components/F1-Footers/F1-1-Footer-AoC/component';
import { createF12 } from '../../../4-components/F1-Footers/F1-2-Footer-Main/component';


export const createF1 = ({}) => {

	const aocHTML = createF11({});
	const footerHTML = createF12({});

	const bottombarHTML = aocHTML + footerHTML;

	const bottombar = document.createElement('div');
	bottombar.className = 'sb-act-bottom';
	bottombar.innerHTML = bottombarHTML;
	const bottombarExport = bottombar.innerHTML;
	return bottombarExport;

};
