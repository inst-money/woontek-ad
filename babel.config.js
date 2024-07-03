module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'noumena-ui',
        styleLibrary: {
          base: false, // 是否每个组件都默认引用base.css
          name: 'theme', // css目录的名字
        },
      },
    ],
  ],
};
