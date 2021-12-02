const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
// https://habr.com/ru/company/vk/blog/530798/

const pluginAntdLess = withAntdLess({

  lessVarsFilePath: './src/styles/variables.less',

  lessVarsFilePathAppendToEndOfContent: true,

  cssLoaderOptions: {},
});

module.exports = withPlugins([[pluginAntdLess]], {
  webpack(config) {
    return config;
  },
});
