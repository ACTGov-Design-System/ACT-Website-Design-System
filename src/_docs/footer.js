import React from "react";
import LinkTo from "@storybook/addon-links/react";

const Footer = () => {
	return (
		<div className="act-footer">
			<div className="act-flex act-flex-violet">
				<div className="act-flex__container">
					<div className="act-flex__grid">
						<div className="act-flex__row">
							<div className="act-col act-col-sm-3">
								<div className="act-box">
									<div className="act-footer-nav">
										<h4>System</h4>
										<ul>
											<li>Introduction</li>
											<li>Our ecosystem</li>
											<li>Roles & responsibilities</li>
											<li>Changes & updates</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="act-col act-col-sm-3">
								<div className="act-box">
									<div className="act-footer-nav">
										<h4>Guidelines</h4>
										<ul>
											<li>Overview</li>
											<li>Accessibility</li>
											<li>Branding</li>
											<li>Content</li>
											<li>Glossary</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="act-col act-col-sm-3">
								<div className="act-box">
									<div className="act-footer-nav">
										<h4>Design Tokens</h4>
										<ul>
											<li>Overview</li>
											<li>Breakpoints</li>
											<li>Colours</li>
											<li>Interactions</li>
											<li>Radius</li>
											<li>Shadows</li>
											<li>Spacing</li>
											<li>Typography</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="act-col act-col-sm-3">
								<div className="act-box">
									<div className="act-footer-nav">
										<h4>Layout</h4>
										<ul>
											<li>Galu</li>
											<li>Bimbiang</li>
											<li>Dyindan</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="act-col act-col-sm-3">
								<div className="act-box">
									<div className="act-footer-nav">
										<h4>Components</h4>
										<ul>
											<li>Accordion</li>
											<li>Alerts</li>
											<li>Buttons</li>
											<li>Cards</li>
											<li>Footers</li>
											<li>Form Elements</li>
											<li>Loaders</li>
											<li>Logos</li>
											<li>Popups</li>
											<li>Tables</li>
											<li>Tabs</li>
											<li>Tags</li>
											<li>Tooltips</li>
											<li>Wayfinding</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="act-col act-col-sm-3">
								<div className="act-box">
									<div className="act-footer-nav">
										<h4>Patterns</h4>
										<ul>
											<li>Card Groups</li>
											<li>Feature Rows</li>
											<li>Footer Groups</li>
											<li>Forms</li>
											<li>Filtering</li>
											<li>Hero Rows</li>
											<li>List Groups</li>
											<li>Topbar</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="act-col act-col-sm-3">
								<div className="act-box">
									<div className="act-footer-nav">
										<h4>Previews</h4>
										<ul>
											<li>Access Canberra</li>
											<li>ACT Health</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="act-flex__row">
							<div className="act-col act-col-sm-12">
								<div className="act-box">
									<div className="act-footer-main">
										<div className="act-footer-main__container">
											<div className="act-footer-main__content">
											</div>
											<div className="act-footer-main__content">
												<div className="act-footer-main__socials">
													<h5>Follow us</h5>
													<a className="act-footer-main__socials__icon" href="#" target="_blank" title="Facebook">
														<i className="fa-brands fa-facebook-f"></i>
													</a>
													<a className="act-footer-main__socials__icon" href="#" target="_blank" title="Twitter">
														<i className="fa-brands fa-twitter"></i>
													</a>
													<a className="act-footer-main__socials__icon" href="#" target="_blank" title="Linkedin">
														<i className="fa-brands fa-linkedin-in"></i>
													</a>
													<a className="act-footer-main__socials__icon" href="#" target="_blank" title="YouTube">
														<i className="fa-brands fa-youtube"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
