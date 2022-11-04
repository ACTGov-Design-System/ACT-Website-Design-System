import { createC11 } from "../c11-card/component";

export const createC10 = ({
  type,
  feature,
  icon,
  dateVisible,
  header,
  description,
  ctaVisible,
  ctaText,
  card1,
}) => {

  if (card1 == undefined){
    card1 = {
      type: type,
      feature: feature,
      icon: icon,
      dateVisible: dateVisible,
      header: header,
      description: description,
      ctaVisible: ctaVisible,
      ctaText: ctaText,
    };
  }
  const card1HTML = createC11({
    type:     card1.type,
    feature:    card1.feature,
    icon:    card1.icon,
    dateVisible:    card1.dateVisible,
    header:    card1.header,
    description: card1.description,
    ctaVisible: card1.ctaVisible,
    ctaText: card1.ctaText,
  });


  return `
<div class="act-card-grid">
  `+card1HTML+card1HTML+card1HTML+card1HTML+card1HTML+card1HTML+`
</div>
`;};
