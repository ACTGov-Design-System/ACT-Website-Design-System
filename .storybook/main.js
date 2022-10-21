module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.js",
  ],
  addons: [
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
	babel: async (options) => ({
		...options,
		presets: [
			"@babel/preset-react",
		],
	}),
  framework: "@storybook/html",
	staticDirs: [
		"./public",
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
		modules: ['src', 'node_modules']
	}
}
