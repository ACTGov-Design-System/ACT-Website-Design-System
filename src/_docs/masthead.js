import React from "react";
import LinkTo from "@storybook/addon-links/react";

const Masthead = () => {
	return (
		<div className="act-masthead">
			<div className="act-masthead__container">
				<div className="act-masthead__content left">
					ACT Government Website Design System
				</div>
				<div className="act-masthead__content right">
					<div className="act-masthead__nav">
						<a className="act-button act-button__inline act-button__inline-white act-button__inline-small" href="https://github.com/ACTGov-Design-System/ACTGov-Design-System/graphs/commit-activity" target="_blank" title="GitHub Commit Activity" rel="noreferrer">
							<img height="18" className="badge" src="https://img.shields.io/github/commit-activity/m/ACTGov-Design-System/ACTGov-Design-System?style=flat-square"/>
						</a>
					</div>
					<a className="act-button act-button__primary act-button__xsmall act-button__icon-right" type="button" href="https://github.com/ACTGov-Design-System/ACTGov-Design-System" target="_blank" rel="noreferrer">
						GitHub
						<i className="fa-solid fa-arrow-up-right-from-square"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
