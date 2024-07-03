// const merge = require('webpack-merge');

module.exports = {
  publicPath: './',
  lintOnSave: true,

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#0045ff',
            'link-color': '#0045ff',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .tap(options => merge(options, {
  //       limit: 500000,
  //     }));
  // },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .tap(options => merge(options, {
  //       limit: 500000,
  //     }));
  // },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap((options) => {
  //       // eslint-disable-next-line no-param-reassign
  //       options.limit = 500000;
  //       return options;
  //     });
  // },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options('limit', 500000)
      .end();
    // config.module
    //   .rule('fonts')
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .options('limit', 500000)
    //   .end();
  },
};
