module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 37.5, // 换算的基数(设计图750的根字体为75)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: {},
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}