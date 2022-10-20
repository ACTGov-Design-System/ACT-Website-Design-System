import { createB31 } from "../../../4-components/B3-Breadcrumbs/B3-1-Breadcrumbs/component";

export const createP11 = ({
  heading1,
  crumb1,
  crumb1link,
  crumb2,
  crumb2link,
  crumb3,
  crumb3link,
  crumb4,
  crumb4link,
  crumb5,
  crumb5link,
}) => {

  const breadcrumbsHTML = createB31({
    crumb1: crumb1,
    crumb1link: crumb1link,
    crumb2: crumb2,
    crumb2link: crumb2link,
    crumb3: crumb3,
    crumb3link: crumb3link,
    crumb4: crumb4,
    crumb4link: crumb4link,
    crumb5: crumb5,
    crumb5link: crumb5link,
  });

  const inpageBannerHTML = `
<div class="act-flex act-flex-light-grey-gradient">
  <div class="act-flex__container act-flex__container-padding-trim">
    <div class="act-flex__grid">
      <div class="act-flex__row">
        <div class="act-col act-col-sm-12">
          <div class="act-box">
            `+breadcrumbsHTML+`
            <h1>`+heading1+`</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;


  breadcrumbsHTML;

  const inpageBanner = document.createElement("div");
  inpageBanner.className = "sb-act-inpagebanner";
  inpageBanner.innerHTML = inpageBannerHTML;
  const inpageBannerExport = inpageBanner.innerHTML;
  return inpageBannerExport;

};
