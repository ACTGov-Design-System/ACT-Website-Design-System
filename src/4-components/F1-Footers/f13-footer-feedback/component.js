import { createF21 } from "../../../4-components/f2-form-elements/f21-form-inputs/component";

const formHTML = createF21({
  type: "text",
  width: "50%",
  label: "How could we improve this page?",
  required: true,
  value: "",
});

export const createF13 = () => {
  return `
<div class="act-flex act-flex-light-purple">
  <div class="act-flex__container">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col__cw-12">
          <div class="act-box">

            <div class="act-footer-feedback">
              <div class="act-footer-feedback__title">
                <div class="act-footer-feedback__block">
                  <div class="act-h4">Was this page useful?</div>
                </div>
                <div class="act-footer-feedback__block">
                  <div class="act-footer-feedback__block__button"><i class="fa-solid fa-thumbs-up"></i></div>
                  <div class="act-footer-feedback__block__button"><i class="fa-solid fa-thumbs-down"></i></div>
                </div>
              </div>
              <div class="act-footer-feedback__text">
                <p>If you want to hear back, please contact us</p>
              </div>
              <div class="act-footer-feedback__form">
                `+formHTML+`
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
};
