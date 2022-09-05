export default {
  router: {
    base: '/shop/'
  },
  loading: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Avokado',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {
        hid: 'description',
        name: 'description',
        content: 'Avokado | excellent service provides fresh vegetables, fruits, herbs, dates, oil, honey, healthy snacks, and many more to your doorstep. 100% fresh, same day delivery, daily deals, points and immediate awards. Order Now'
      },
      {name: 'format-detection', content: 'telephone=no'}
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/fbfaa2cb57.js'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/slider.css',
    '@/assets/css/banner.css',
    '@/assets/css/home-section-1.css',
    '@/assets/css/main.css',
    '@/assets/css/direction_change.css',
    '@/assets/css/custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-toast-notification.js', mode: 'client'},
    {src: '~/plugins/axios.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    ['@nuxtjs/google-analytics', {
      id: 'GTM-W978XXM'
    }]
    // '@nuxtjs/fontawesome'
    // '@nuxt/image'
  ],
  // fontawesome: {
  //   icons:{
  //     solid:true,
  //     brands:true
  //   }
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['nuxt-vuex-localstorage', {
      localStorage: ['local']
    }],
    ['@netsells/nuxt-hotjar', {
      id: '3117347',
      sv: '6'
    }]
  ],
  i18n: {
    locales: [{
      code: 'en',
      file: 'en.json',
      dir: 'ltr'
    }, {
      code: 'ar',
      file: 'ar.json',
      dir: 'rtl'
    }],
    langDir: 'lang/',
    defaultLocale: 'en'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL
  },
  proxy: {
    '/v3': {target: 'https://avokado.sa'},
    '/jeddah-en': {target: 'https://avokado.sa'}
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  generate: {
    minify: {
      collapseWhitespace: false
    }
  },
  sitemap: {
    hostname: 'https://avokado.sa/',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  }
}
