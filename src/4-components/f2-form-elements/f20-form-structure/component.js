import { createF21 } from "../../../4-components/f2-form-elements/f21-form-inputs/component";

export const createF20 = ({
  formTitle,
  field1,
  field2,
  field3,
}) => {

  if (formTitle == undefined){
    formTitle = "Form Title";
  }
  if (field1 == undefined){
    field1 = {
      type: "input",
      width: "50%",
      label: "First Name",
      required: true,
      value: "James",
    };
  }
  if (field2 == undefined){
    field2 = {
      type: "input",
      width: "50%",
      label: "Last Name",
      required: false,
      value: "Smith",
    };
  }
  if (field3 == undefined){
    field3 = {
      type: "email",
      width: "100%",
      label: "Email Address",
      required: true,
      value: "john@smith.com",
    };
  }

  const field1HTML = createF21({
    type:     field1.type,
    width:    field1.width,
    label:    field1.label,
    required: field1.required,
    value:    field1.value,
  });
  const field2HTML = createF21({
    type:     field2.type,
    width:    field2.width,
    label:    field2.label,
    required: field2.required,
    value:    field2.value,
  });
  const field3HTML = createF21({
    type:     field3.type,
    width:    field3.width,
    label:    field3.label,
    required: field3.required,
    value:    field3.value,
  });

  return `
<div class="act-flex">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col act-col-sm-12">
          <div class="act-box">
            <form class="act-form">
              <h2 class="act-form__title">`+formTitle+`</h2>
              <fieldset class="act-form__section">
                `+field1HTML+field2HTML+field3HTML+`
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;};
