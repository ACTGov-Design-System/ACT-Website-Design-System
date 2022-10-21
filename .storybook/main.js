module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
		'@etchteam/storybook-addon-status',
		{
			name: 'storybook-addon-sass-postcss',
			options: {
				rule: {
					test: /\.(scss|sass)$/i,
				},
			},
		},
  ],
  "framework": "@storybook/html",
	staticDirs: [
		"./public",
	],
}
