const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

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
