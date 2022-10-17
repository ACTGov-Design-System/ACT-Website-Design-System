export const createB41 = ({
	label,
	size,
	icon,
	type,
	onClick,
}) => {
	return `
<button class="act-button act-button__`+type+` act-button__`+size+` act-button__`+icon+`">
	`+label+`
	<i></>
</button>
	`;
};
