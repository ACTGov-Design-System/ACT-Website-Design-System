import { createC22 } from "../../../4-components/c2-content/c22-key-message/component";


export const createPC31 = () => {

  const keyMessageHTML = createC22({});

  const contentHTML = `
    <div class="act-box">`
      + keyMessageHTML +
    ` <p>The death cap mushroom (amanita phalloides) is a deadly fungus that is found across the Canberra region.</p>
      <p>There have been multiple incidents and fatalities associated with death cap mushrooms in the ACT.</p>
      <p>Death cap mushrooms can grow anywhere in our region, at any time. All parts of the death cap mushroom are poisonous. Eating even a small amount of a death cap mushroom can kill you. Death cap mushrooms remain potentially lethal, even if cooked.</p>
      <ul>
        <li>Do not touch or eat wild mushrooms.</li>
        <li>Talk to your family and friends about staying away from any wild mushrooms.</li>
        <li>Remind visitors and people new to the ACT that death cap mushrooms grow in Canberra.</li>
        <li>Keep children and pets away from wild mushrooms.</li>
      </ul>
    </div>
  `;

  const content = document.createElement("div");
  content.class = "sb-act-bottom";
  content.innerHTML = contentHTML;
  const contentExport = content.innerHTML;
  return contentExport;

};
