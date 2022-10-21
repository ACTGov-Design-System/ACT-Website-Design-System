import { createL22 } from "../../4-components/l2-logos/l22-cobranded-logo/component";
import { createA21 } from "../../4-components/a2-alerts/a21-alert-global/component";
import { createW11 } from "../../4-components/w1-wayfinding/w11-masthead/component";
import { createW12 } from "../../4-components/w1-wayfinding/w12-navbar/component";
import { createPH12 } from "../../5-patterns/ph1-hero-rows/ph12-inpage-row/component";


export const createAC1 = () => {

  const alertHTML = createA21({
    type: "success",
    alert: "<span>Free registration</span> for zero emission vehicles for two years",
    fontawesome: "fa-leaf",
    icon: "icon-left",
    dismissible: true,
  });
  const mastheadHTML = createW11({
    title: "An ACT Government Website",
    buttonText: "Log In",
  });
  const navbarHTML = createW12({
    title: "An ACT Government Website1",
  });
  const inPageBannerHTML = createPH12({
    heading1: "Motor vehicle registration and renewal",
    crumb1: "Home",
    crumb1link: "#",
    crumb2: "Transport",
    crumb2link: "#",
    crumb3: "Registration",
    crumb3link: "#",
  });

  const accessCanberraHTML = alertHTML + mastheadHTML + navbarHTML + inPageBannerHTML;

  const accessCanberra = document.createElement("div");
  accessCanberra.className = "sb-import-container";
  accessCanberra.innerHTML = accessCanberraHTML;
  const accessCanberraExport = accessCanberra.innerHTML;
  return accessCanberraExport;

};
