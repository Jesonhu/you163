module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuex开始',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyworlds', name: 'keyworlds', content: '全站关键词' },
      { hid: 'description', name: 'description', content: '全站关键词描述' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/reset.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/common.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' }
    ]
  },
  /**
   * 全局css配置
   */
  css: [
    // '~assets/css/reset.css' // 全局添加内部样式
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' }, // 刷新条颜色
  /*
  ** Build configuration
  */
  build: {
    // 多个页面引入打包多次
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  router: {
    base: '/'
  },
  dev: {
    baseUrl: process.env.NODE_ENV || 'http://127.0.0.1:3000'
  }
}
