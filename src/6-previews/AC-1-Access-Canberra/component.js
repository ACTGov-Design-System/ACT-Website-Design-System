import { createL22 } from "../../4-components/L2-Logos/L2-2-Cobranded-Logo/component";
import { createA21 } from "../../4-components/A2-Alerts/A2-1-Alert-Global/component";
import { createM31 } from "../../4-components/M3-Masthead/M3-1-Masthead/component";
import { createW16 } from "../../4-components/W1-Wayfinding/W1-6-NavBar/component";
import { createP11 } from "../../5-patterns/P1-Page-Banner/P1-1-InPage-Banner/component";


export const createAC1 = () => {

  const alertHTML = createA21({
    type: "success",
    alert: "<span>Free registration</span> for zero emission vehicles for two years",
    fontawesome: "fa-leaf",
    icon: "icon-left",
    dismissible: true,
  });
  const mastheadHTML = createM31({
    title: "An ACT Government Website",
    buttonText: "Log In",
  });
  const navbarHTML = createW16({
    title: "An ACT Government Website1",
  });
  const inPageBannerHTML = createP11({
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
