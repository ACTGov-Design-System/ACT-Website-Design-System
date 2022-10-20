export const createB41 = ({
  label,
  fontawesome,
  size,
  icon,
  type,
  pseudoClass,
  onClick,
}) => {

  var pseudoClassHTML;

  if ( pseudoClass != ""){
    pseudoClassHTML = "act-button__"+type+"-"+pseudoClass;
  } else {
    pseudoClassHTML = "";
  }

  return `
<button class="act-button act-button__`+type+" act-button__"+size+" act-button__"+icon+ " "+pseudoClassHTML+`" type="button">
  `+label+`
  <i class="fa-solid `+fontawesome+`"></i>
</button>
	`;
};
