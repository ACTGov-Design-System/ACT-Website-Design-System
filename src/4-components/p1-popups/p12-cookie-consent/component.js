import { createB11 } from "../../b1-buttons/b11-button-main/component";

export const createP12 = ({
  type,
}) => {

  const buttonHTML = createB11({
    type: "primary",
    size: "default",
    icon: "no-icon",
    label: "Button",
  });

  return `
<div class="act-popup bottom">
  <div class="act-popup__container act-cookie-consent">
    <div class="act-popup__content">
      <div class="act-popup__block ">
        <div class="act-h4">Heading</div>
        <div class="act-popup__close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="act-popup__block">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="act-button-group">
        `+buttonHTML+``+buttonHTML+`
        </div>
      </div>
    </div>
  </div>
</div>
`;
};
