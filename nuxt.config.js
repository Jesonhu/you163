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
    '~assets/css/test.css', // 全局添加内部样式
    'swiper/dist/css/swiper.css',
    { src: '~assets/scss/test.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: {
    // 默认进度条
    // color: '#B4A078',  // 进度条颜色 默认black
    failedColor: 'red', // 页面数据加载失败时执行 默认red
    height: '2px', // 进度条高度 默认2px

    loading: '~components/loading.vue' // 使用自定义加载组件
  },
  /*
  ** Build configuration
  */
  build: {
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: [
      'axios',
      'swiper'
    ],
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
  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3333'
  },
  plugins: [
    { src: '~plugins/filters.js', ssr: false },
    { src: '~plugins/jquery.min.js', ssr: false },
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/show.js', ssr: false },
    { src: '~plugins/jquery.fixedtool.js', ssr: false }
  ]
}
