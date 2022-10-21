export const createA22 = ({
  label,
  type,
}) => {
  return `
<div class="act-alert-inpage act-alert-inpage`+type+`">
  <p>`+label+`</p>
</div>
	`;
};
