export const createC11 = ({
  type,
  feature,
  icon,
  dateVisible,
  header,
  description,
  ctaVisible,
  ctaText,
}) => {

  var featureImageHTML = "";
  var featureIconHTML = "";
  var featureDateHTML = "";
  var featureHeaderHTML = `<div class="act-card__title">`+header+`</div>`;
  var featureDescriptionHTML = `<div class="act-card__description">`+description+`</div>`;
  var featureCTAHTML = "";

  if (type != "homepage"){
    if (feature == "image"){
      if (type == "primary"){
        featureImageHTML = `<div class="act-card__image" style="background-image: url('https://images.unsplash.com/photo-1583339522870-0d9f28cef33f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');">
        &nbsp;
      </div>`;} else {
        featureImageHTML = "";
      }
    } else if (feature == "icon"){
      featureIconHTML = `<div class="act-card__icon"><i class="fa-solid `+icon+`"></i></div>`;
    }
  }

  if (type == "homepage"){
    featureIconHTML = `<div class="act-card__icon"><i class="fa-solid `+icon+`"></i></div>`;
  }

  if (dateVisible == true){
    featureDateHTML = `<div class="act-card__timestamp">20 Sept 2022</div>`;
  }

  if (ctaVisible == true){
    featureCTAHTML = `<div class="act-card__cta">
      <i class="fa-solid fa-arrow-right"></i>
      <span>`+ctaText+`</span>
    </div>`;
  }

  return `
<a class="act-card act-card__`+type+` act-card__feature--`+feature+`" href="#" title="Card Link">
  <div class="act-card__container">
    `+featureImageHTML+`
    <div class="act-card__content">
      `+featureIconHTML+`
      `+featureDateHTML+`
      `+featureHeaderHTML+`
      `+featureDescriptionHTML+`
      `+featureCTAHTML+`
    </div>
  </div>
</a>
`;
};
