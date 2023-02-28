export const createB13 = ({
  label,
  fontawesome,
  size,
  icon,
  type,
  pseudoClass,
  onClick,
}) => {
  
  var pseudoClassHTML;
  
  if ( pseudoClass != ""){pseudoClassHTML = "act-button__"+type+"-"+pseudoClass;
  } else {pseudoClassHTML = "";
  }
  
  //TODO: remove all the customisations from the button and make it a generic button

  return `
  <button class="act-button act-button__primary act-button__`+size+` act-button__icon-right" type="button">
  Back to top
  <i class="fa-solid fa-arrow-up"></i>
</button>
	  `;
};
  