/* eslint-disable linebreak-style */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
// eslint-disable-next-line linebreak-style
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// See setup guide on https://gridsome.org/docs/assets-css/
const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
      ],
    });
}

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};
