export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Avokado.sa',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {hid: 'description', name: 'description', content: ''},
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
    // '@/assets/css/direction_change.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8'
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
    ['nuxt-vuex-localstorage', {
      localStorage: ['local']
    }]

  ],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000'
    // baseURL: 'https://v3ui.avokado.sa'
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
  }
}
