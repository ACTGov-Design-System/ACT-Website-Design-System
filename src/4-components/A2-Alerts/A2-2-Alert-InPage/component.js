export const createA22 = ({
	backgroundColor,
	label,
	type,
	onClick,
	primary = false,
	size = "medium",
}) => {
	return `
<div class="act-alert-inpage act-alert-inpage`+type+`">
  <p>`+label+`</p>
</div>
	`;
};
