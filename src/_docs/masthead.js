import React from "react";
import LinkTo from "@storybook/addon-links/react";

const Masthead = () => {
	return (
		<div className="act-masthead">
			<div className="act-masthead__container">
				<div className="act-masthead__content left">
					ACT Government Design System
				</div>
				<div className="act-masthead__content right">
					<div className="act-masthead__nav">
						<a className="act-button act-button__inline act-button__inline-white act-button__inline-small" href="https://github.com/ACTGov-Design-System/ACTGov-Design-System/graphs/commit-activity" target="_self" title="GitHub Commit Activity">
							<img className="badge" src="https://img.shields.io/github/commit-activity/m/ACTGov-Design-System/ACTGov-Design-System?style=flat-square"/>
						</a>
					</div>
					<button className="act-button act-button__primary act-button__xsmall act-button__no-icon" type="button">
						GitHub
						<i className="fa-solid `+fontawesome+`"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
