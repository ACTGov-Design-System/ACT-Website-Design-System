import { createL22 } from "../../l2-logos/l22-cobranded-logo/component";

export const createW15 = ({
  title,
}) => {

  const logo = createL22({
    colour: "white",
    cobrand: "access-canberra",
    type1: "horizontal",
    type2: "cobrand-logo",
    alt1: "ACT Government",
    alt2: "Access Canberra",
  });

  const megamenuHTML = `
  <div class="act-megamenu">
    <div class="act-megamenu__container">
			<div class="act-megamenu__content act-megamenu__content__header">
				<div class="act-megamenu__block">
					`+logo+`
				</div>
				<div class="act-megamenu__block">
					<div class="act-megamenu__close" title="Close Menu">
						Close <i class="fa-solid fa-xmark"></i>
					</div>
				</div>
			</div>
			<div class="act-megamenu__content act-megamenu__content__main">
				<div class="act-megamenu__content__block">
          <div class="act-megamenu__link">
            <div class="act-megamenu__link__text">
              Home
            </div>
          </div>
          <div class="act-megamenu__link">
            <div class="act-megamenu__link__text">
              Link 1
            </div>
            <div class="act-megamenu__link__icon">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="act-megamenu__link">
            <div class="act-megamenu__link__text">
              Link 1
            </div>
            <div class="act-megamenu__link__icon">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="act-megamenu__link">
            <div class="act-megamenu__link__text">
              Link 1
            </div>
            <div class="act-megamenu__link__icon">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="act-megamenu__link">
            <div class="act-megamenu__link__text">
              Link 1
            </div>
            <div class="act-megamenu__link__icon">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
				<div class="act-megamenu__content__block">
          <div class="act-megamenu__link">
            <div class="act-megamenu__link__text">
              Parent Link <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div class="act-megamenu__sublink">
            <div class="act-megamenu__sublink__text">
              Sub Link 1
            </div>
          </div>
          <div class="act-megamenu__sublink">
            <div class="act-megamenu__sublink__text">
              Sub Link 2
            </div>
          </div>
          <div class="act-megamenu__sublink">
            <div class="act-megamenu__sublink__text">
              Sub Link 3
            </div>
          </div>
          <div class="act-megamenu__sublink">
            <div class="act-megamenu__sublink__text">
              Sub Link 4
            </div>
          </div>
          <div class="act-megamenu__sublink">
            <div class="act-megamenu__sublink__text">
              Sub Link 5
            </div>
          </div>
          <div class="act-megamenu__sublink">
            <div class="act-megamenu__sublink__text">
              Sub Link 6
            </div>
          </div>
        </div>
			</div>
			<div class="act-megamenu__content act-megamenu__content__footer">
				<div class="act-megamenu__block">
					<p>
						<a class="" href="#" target="_blank" title="Accessibility">Accessibility</a>
						<a class="" href="#" target="_blank" title="Privacy">Privacy</a>
						<a class="" href="#" target="_blank" title="Disclaimer">Disclaimer</a>
						<a class="" href="#" target="_blank" title="Copyright">Copyright</a>
						<a class="" href="#" target="_blank" title="Sitemap">Sitemap</a>
					</p>
				</div>
				<div class="act-megamenu__block">
					<div class="act-megamenu__socials">
						<h5>Follow us</h5>
						<a class="act-megamenu__socials__icon" href="#" target="_blank" title="Facebook">
							<i class="fa-brands fa-facebook-f"></i>
						</a>
						<a class="act-megamenu__socials__icon" href="#" target="_blank" title="Twitter">
							<i class="fa-brands fa-twitter"></i>
						</a>
						<a class="act-megamenu__socials__icon" href="#" target="_blank" title="Linkedin">
							<i class="fa-brands fa-linkedin-in"></i>
						</a>
						<a class="act-megamenu__socials__icon" href="#" target="_blank" title="YouTube">
							<i class="fa-brands fa-youtube"></i>
						</a>
					</div>
				</div>
			</div>
    </div>
  </div>
	`;

  const megamenu = document.createElement("div");
  megamenu.className = "sb-act-navbar";
  megamenu.innerHTML = megamenuHTML;
  const megamenuExport = megamenu.innerHTML;
  return megamenuExport;

};
