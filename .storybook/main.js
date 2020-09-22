
/**
 * TODO:
 * The storybook is quite slow in development mode as well as in production mode.
 * RE:
 * https://github.com/storybookjs/storybook/issues/6391
 * https://storybook.js.org/docs/react/configure/webpack
 */

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
};
