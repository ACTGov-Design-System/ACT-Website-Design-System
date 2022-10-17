import { createB41 } from '../../B4-Buttons/B4-1-Primary-Button/component';

export const createM31 = ({
	title,
}) => {

	const button = createB41({
		type: "primary",
		size: "xsmall",
		icon: "no-icon",
		label: "Login",
	});

	const mastheadHTML = `
<div class="act-masthead">
  <div class="act-masthead__container">
    <div class="act-masthead__content left">
      `+title+`
    </div>
    <div class="act-masthead__content right">
      `+button+`
    </div>
  </div>
</div>
	`
	const masthead = document.createElement('div');
	masthead.className = 'sb-act-masthead';
	masthead.innerHTML = mastheadHTML;
	const mastheadExport = masthead.innerHTML;
	return mastheadExport;
};
