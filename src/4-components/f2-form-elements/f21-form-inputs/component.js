export const createF21 = ({
  type,
  width,
  label,
  required,
  pseudoClass,
  placeholder,
  value,
  description,
  descriptionValue,
  alert,
  alertIcon,
  alertValue,
}) => {

  var widthVal = "__cw-12";
  if (width == "25%"){ widthVal = "__cw-3";}
  if (width == "33%"){ widthVal = "__cw-4";}
  if (width == "50%"){ widthVal = "__cw-6";}
  if (width == "66%"){ widthVal = "__cw-8";}
  if (width == "75%"){ widthVal = "__cw-9";}
  if (width == "100%"){ widthVal = "__cw-12";}

  var labelHTML = label;
  var requiredData;
  if ( required == true){
    labelHTML = label + `<span class="required">*</span>`;
    requiredData = `required="required"`;
  }

  var disabledData;
  if (pseudoClass == "disabled"){disabledData = "disabled";}

  var readonlyData;
  if (pseudoClass == "read-only"){readonlyData = "readonly";}

  var placeholderData;
  if (placeholder != "" && placeholder != undefined ){placeholderData = `placeholder="`+placeholder+`"`;}

  var valueData;
  if (value != "" && value != undefined ){
    valueData = value;
  } else {
    valueData = "";
  }

  var descriptionHTML;
  if ( description == true){
    descriptionHTML = `<span class="act-form__field__description" for="`+id+`">`+descriptionValue+`</span>`;
  } else {
    descriptionHTML = "";
  }

  var alertHTML;
  if ( alert == true){
    alertHTML = `<span class="act-form__field__alert" for="`+id+`"><i class="fa-solid fa-`+alertIcon+`"></i>`+alertValue+`</span>`;
  } else {
    alertHTML = "";
  }


  function makeid(length) {
    var result           = "";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  var id = type + "_" + makeid(5);

  return `
<div class="act-form__container act-form__container`+widthVal+`" id="container_`+id+`">
  <label class="act-form__field__label" for="`+id+`">
    `+labelHTML+`
  </label>
  <input class="act-form__field__`+type+` `+pseudoClass+`" id="`+id+`" `+requiredData+` type="`+type+`" value="`+valueData+`" `+placeholderData+` `+readonlyData+` `+disabledData+`/>
  `+descriptionHTML+alertHTML+`
</div>
`;};
