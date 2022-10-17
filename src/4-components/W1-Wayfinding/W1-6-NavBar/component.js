import { createL22 } from '../../L2-Logos/L2-2-Cobranded-Logo/component';

export const createW16 = ({
	title,
}) => {

	const logo = createL22({
		colour: "black",
		cobrand: "access-canberra",
		type1: "horizontal",
		type2: "cobrand-logo",
		alt1: "ACT Government",
		alt2: "Access Canberra",
	});

	const navbarHTML = `
<div class="act-navbar__container">
  <div class="act-navbar__content left">
    `+logo+`
  </div>
  <div class="act-navbar__content right">

  </div>
</div>
	`
	const navbar = document.createElement('div');
	navbar.className = 'act-navbar';
	navbar.innerHTML = navbarHTML;
	const navbarExport = navbar.innerHTML;
	return navbarExport;
};
