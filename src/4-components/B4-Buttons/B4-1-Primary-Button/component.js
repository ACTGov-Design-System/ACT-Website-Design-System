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
  <i></i>
</button>
	`;
};

// <button class="act-button act-button__`+type+` act-button__`+type+`-hover act-button__`+size+` act-button__`+icon+`">
// 	`+label+`
// 	<i></i>
// </button>
// <button class="act-button act-button__`+type+` act-button__`+type+`-active act-button__`+size+` act-button__`+icon+`">
// 	`+label+`
// 	<i></i>
// </button>
// <button class="act-button act-button__`+type+` act-button__`+type+`-focus act-button__`+size+` act-button__`+icon+`">
// 	`+label+`
// 	<i></i>
// </button>
// <button class="act-button act-button__`+type+` act-button__`+type+`-disabled act-button__`+size+` act-button__`+icon+`" disabled="disabled">
// 	`+label+`
// 	<i></i>
// </button>
