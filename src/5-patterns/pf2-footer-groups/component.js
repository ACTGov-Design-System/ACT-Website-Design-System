import { createF11 } from "../../4-components/f1-footers/f11-footer-main/component";
import { createF12 } from "../../4-components/f1-footers/f12-footer-aoc/component";


export const createPF2 = () => {

  const footerHTML = createF11({});
  const aocHTML = createF12({});

  const bottombarHTML = aocHTML + footerHTML;

  const bottombar = document.createElement("div");
  bottombar.className = "sb-act-bottom";
  bottombar.innerHTML = bottombarHTML;
  const bottombarExport = bottombar.innerHTML;
  return bottombarExport;

};
