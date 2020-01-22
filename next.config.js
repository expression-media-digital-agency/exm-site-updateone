const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPlugins = require('next-compose-plugins');


module.exports = withPlugins([withCSS, withSass], {
  webpack(config, options) {
      config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
      });
      return config;
  },
});