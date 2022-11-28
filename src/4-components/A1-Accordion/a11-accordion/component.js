export const createA11 = ({
  type,
  state,
}) => {
  return `
<div class="act-accordion act-accordion__`+type+`">
  <div class="act-accordion__container">
    <div class="act-accordion__section act-accordion__section__`+state+`">
      <div class="act-accordion__section__heading">
        <h5>Title</h5>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="act-accordion__section__content">ABC</div>
      <div class="act-accordion__section__content">ABC</div>
      <div class="act-accordion__section__content">ABC</div>
      <div class="act-accordion__section__content">ABC</div>
    </div>
  </div>
</div>
	`;
};
