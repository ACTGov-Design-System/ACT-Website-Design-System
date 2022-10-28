export const createF22 = ({
  type,
  width,
  label,
  required,
  pseudoClass,
}) => {

  var widthVal = "-sm-12";
  if (width == "25%"){ widthVal = "-sm-3";}
  if (width == "33%"){ widthVal = "-sm-4";}
  if (width == "50%"){ widthVal = "-sm-6";}
  if (width == "66%"){ widthVal = "-sm-8";}
  if (width == "75%"){ widthVal = "-sm-9";}
  if (width == "100%"){ widthVal = "-sm-12";}

  var labelHTML = label;
  var requiredData;
  if ( required == true){
    labelHTML = label + `<span class="required">*</span>`;
    requiredData = `required="required"`;
  }

  var disabledData;
  if (pseudoClass == "disabled"){disabledData = "disabled";} else {disabledData = "";}

  var readonlyData;
  if (pseudoClass == "read-only"){readonlyData = "readonly";}

  function makeid(length) {
    var result           = "";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  var id = "checkbox_" + makeid(5);

  return `
<div class="act-form__container act-form__container__checkbox act-form__container`+widthVal+`" id="container_`+id+`">
  <label class="act-form__field__label" for="`+id+`">
    `+labelHTML+`
  </label>
  <input class="act-form__field__checkbox `+pseudoClass+`" id="`+id+`" `+requiredData+` type="checkbox" `+readonlyData+` `+disabledData+`/>
</div>
`;};
