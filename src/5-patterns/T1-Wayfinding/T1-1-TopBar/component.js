import { createL22 } from "../../../4-components/L2-Logos/L2-2-Cobranded-Logo/component";
import { createA21 } from "../../../4-components/A2-Alerts/A2-1-Alert-Global/component";
import { createM31 } from "../../../4-components/M3-Masthead/M3-1-Masthead/component";
import { createW16 } from "../../../4-components/W1-Wayfinding/W1-6-NavBar/component";


export const createT11 = () => {

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

  const topbarHTML = alertHTML + mastheadHTML + navbarHTML;

  const topbar = document.createElement("div");
  topbar.className = "sb-act-topbar";
  topbar.innerHTML = topbarHTML;
  const topbarExport = topbar.innerHTML;
  return topbarExport;

};
