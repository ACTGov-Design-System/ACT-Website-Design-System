export const createB11 = ({
	backgroundColor,
	label,
	type,
	onClick,
	primary = false,
	size = "medium",
}) => {
	return `
<div class="act-alert-global act-alert-global`+type+`" role="alert">
  <div class="act-alert-global__container">
    <div class="act-alert-global__content">
      `+label+`
    </div>
  </div>
</div>
	`;
};
