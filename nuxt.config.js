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
    '@/assets/css/home-v2.css',
    '@/assets/css/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-toast-notification.js', mode: 'client'},
    {src: '~/plugins/axios.js', mode: 'client'},
    {src: '~/plugins/infiniteloading.js', ssr: false}
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
    routes: [
      "/category/20/all-20?cid=20",
      "/category/13/deal-of-the-day?cid=13",
      "/category/19/juices-19?cid=19",
      "/category/1/fruits?cid=1",
      "/category/2/vegetables?cid=2",
      "/category/3/herbs?cid=3",
      "/category/7/boxes?cid=7",
      "/category/11/honey?cid=11",
      "/product/4862/fattoush-cork?pid=4862",
      "/product/4951/nectarine-small-plat-4951?pid=4951",
      "/product/5012/red-onion-cutter-vacuum-sealed-150gm?pid=5012",
      "/product/5066/peach-plate?pid=5066",
      "/product/5070/pear-plat?pid=5070",
      "/product/2278/dala3-basket-2278?pid=2278",
      "/product/4886/tabbouleh-cork?pid=4886",
      "/product/5043/amal-?pid=5043",
      "/product/2281/kash5a-basket-2281?pid=2281",
      "/product/4125/family-vegetable-box-4125?pid=4125",
      "/product/4887/baba-ghanoush-cork?pid=4887",
      "/product/4914/sweet-potatos-cartoon-4914?pid=4914",
      "/product/5002/beet-slice-vacuum-sealed-5002?pid=5002",
      "/product/5053/watermelon-card?pid=5053",
      "/product/5098/segie-malaki-mufatal?pid=5098",
      "/product/2223/small-fruits-box-2223?pid=2223",
      "/product/2280/lamma-basket-2280?pid=2280",
      "/product/4859/salad-cork?pid=4859",
      "/product/5011/potatos-kilo?pid=5011",
      "/product/5054/pear-strawberry-card?pid=5054",
      "/product/5100/khalas-malaki-big?pid=5100",
      "/product/5111/tropical-salad?pid=5111",
      "/product/2222/big-fruits-box-2222?pid=2222",
      "/product/5026/winter-box?pid=5026",
      "/product/5055/strawberry-card?pid=5055",
      "/product/5112/summer-salad?pid=5112",
      "/product/193/small-vegetable-fruit-box-193?pid=193",
      "/product/5102/khalas-malaki-super-majrush?pid=5102",
      "/product/5103/khalas-malaki-majrush?pid=5103",
      "/product/195/big-vegetable-fruit-box-195?pid=195",
      "/product/2654/kiwi-slice-2654?pid=2654",
      "/product/4998/mixed-bell-peppers-manstick-juliian-vacuum-sealed-4998?pid=4998",
      "/product/5104/khalas-malaki-super-with-almond?pid=5104",
      "/product/4129/family-herbs-box-4129?pid=4129",
      "/product/4997/mixed-bell-peppers-cubes-vacuum-sealed-4997?pid=4997",
      "/product/5105/sukkary-fakhir-majrush?pid=5105",
      "/product/4996/mixed-vegetables-vacuum-sealed-4996?pid=4996",
      "/product/2297/diet-salad-2297?pid=2297",
      "/product/4995/peeled-garlic-vacuum-sealed-4995?pid=4995",
      "/product/175/lettuce-175?pid=175",
      "/product/635/parsley-big-bundle-635?pid=635",
      "/product/2991/brownmushroom-2991?pid=2991",
      "/product/4994/white-cabbage-grated-vacuum-sealed-4994?pid=4994",
      "/product/5050/potatos-crispy-vacuum-sealed?pid=5050",
      "/product/419/rocca-bundle-419?pid=419",
      "/product/643/green-onion-bundle-643?pid=643",
      "/product/2301/orange-naval-slice-2301?pid=2301",
      "/product/4993/red-cabbage-grated-vacuum-sealed-4993?pid=4993",
      "/product/181/green-onion-bundle-181?pid=181",
      "/product/561/baby-onion-561?pid=561",
      "/product/2298/pineapple-slice-2298?pid=2298",
      "/product/4991/cauliflower-slice-vacuum-sealed-4991?pid=4991",
      "/product/416/tomatoes-local-416?pid=416",
      "/product/423/leeks-bundle-423?pid=423",
      "/product/3139/local-lettuce?pid=3139",
      "/product/4990/potatos-cubes-vacuum-sealed-4990?pid=4990",
      "/product/5040/pear-american-5040?pid=5040",
      "/product/551/marjoram?pid=551",
      "/product/639/rocca-bundle-639?pid=639",
      "/product/4989/potatos-sticks-vacuum-sealed-4989?pid=4989",
      "/product/4988/potatos-slices-vacuum-sealed-4988?pid=4988",
      "/product/5124/mango-plat?pid=5124",
      "/product/421/parsley-bundle-421?pid=421",
      "/product/4987/cucumber-slices-vacuum-sealed-4987?pid=4987",
      "/product/420/coriander-bundle-420?pid=420",
      "/product/4986/carrots-cubes-vacuum-sealed-4986?pid=4986",
      "/product/4985/carrots-slices-vacuum-sealed-4985?pid=4985",
      "/product/414/white-radish-bundle-414?pid=414",
      "/product/4965/tomatoes-small-plat-4965?pid=4965",
      "/product/4983/carrots-manstick-julaian-vacuum-sealed-4983?pid=4983",
      "/product/422/dill-bundle-422?pid=422",
      "/product/1465/peach-african-box-1465?pid=1465",
      "/product/4921/tomatoes-medium-cork-4921?pid=4921",
      "/product/4982/zucchini-slices-vacuum-sealed-4982?pid=4982",
      "/product/424/purslane-bundle-424?pid=424",
      "/product/4992/zucchini-ready-for-stuffing-vacuum-sealed-4992?pid=4992",
      "/product/177/basil-habag-bundle-177?pid=177",
      "/product/184/molokhia-bundle-184?pid=184",
      "/product/228/peeled-garlic-228?pid=228",
      "/product/417/mint-bundle-417?pid=417",
      "/product/4920/tomatoes-big-cork-4920?pid=4920",
      "/product/2810/chard-bundle-2810?pid=2810",
      "/product/4021/mandarin-african-4021?pid=4021",
      "/product/4923/cucumber-small-plat-4923?pid=4923",
      "/product/5121/garlic-bag?pid=5121",
      "/product/4922/cucumber-medium-cork-4922?pid=4922",
      "/product/142/baby-carrots-142?pid=142",
      "/product/3108/cucumber-big-cork-3108?pid=3108",
      "/product/605/turmeric-indian-605?pid=605",
      "/product/5038/carrot-nawami-local?pid=5038",
      "/product/5017/baby-tomatoes-cherry-250gm?pid=5017",
      "/product/3118/carrots-australian-small-plat-3118?pid=3118",
      "/product/4678/red-onions-medium-bag-4678?pid=4678",
      "/product/3120/carrots-australian-medium-cork?pid=3120",
      "/product/2742/hot-pepper-turshi-2742?pid=2742",
      "/product/4703/white-onion-medium-bag?pid=4703",
      "/product/3911/tomatoes-cork-3911?pid=3911",
      "/product/404/white-onions-local-404?pid=404",
      "/product/3098/red-onion-big-bag-3098?pid=3098",
      "/product/399/cucumber-399?pid=399",
      "/product/4925/eggplant-black-small-plat-4925?pid=4925",
      "/product/3909/cucumber-cork-3909?pid=3909",
      "/product/4924/eggplant-black-medium-cork-4924?pid=4924",
      "/product/3110/eggplant-black-big-cork-3110?pid=3110",
      "/product/3109/zucchini-small-plat-3109?pid=3109",
      "/product/4883/white-onions-spanish?pid=4883",
      "/product/4958/zucchini-medium-cork-4958?pid=4958",
      "/product/4675/okra-small-plat?pid=4675",
      "/product/4677/red-onions-small-bag-4677?pid=4677",
      "/product/531/eggplant-black-small-531?pid=531",
      "/product/4957/okra-medium-cork?pid=4957",
      "/product/4552/potatoes-small-bag-4552?pid=4552",
      "/product/4553/potatoes-medium-bag-4553?pid=4553",
      "/product/3119/okra-big-cork-3119?pid=3119",
      "/product/3918/potatoes-cork-3918?pid=3918",
      "/product/4930/green-beans-small-plat-4930?pid=4930",
      "/product/751/zucchini-751?pid=751",
      "/product/4929/green-beans-medium-cork-4929?pid=4929",
      "/product/3092/green-beans-big-cork-3092?pid=3092",
      "/product/5034/hot-pepper-green-indian-500gm?pid=5034",
      "/product/4973/cowpea-small-plat-4973?pid=4973",
      "/product/3914/eggplant-black-long-3914?pid=3914",
      "/product/3100/garlic-small-bag-3100?pid=3100",
      "/product/132/eggplant-black-big-132?pid=132",
      "/product/3916/eggplant-black-cork-3916?pid=3916",
      "/product/4927/hadid-small-plat?pid=4927",
      "/product/4926/hadid-medium-cork?pid=4926",
      "/product/133/pumpkin-american?pid=133",
      "/product/5071/bell-pepper-green-5071?pid=5071",
      "/product/3917/bell-pepper-green-cork-3917?pid=3917",
      "/product/3103/american-pumpkin-small-plat?pid=3103",
      "/product/138/white-cabbage-138?pid=138",
      "/product/402/sweet-potatos-402?pid=402",
      "/product/3104/yellow-lemon-small-plat-3104?pid=3104",
      "/product/139/red-cabbage-139?pid=139",
      "/product/405/large-lemon-405?pid=405",
      "/product/406/small-lemon-406?pid=406",
      "/product/413/beet-413?pid=413",
      "/product/410/green-beans-410?pid=410",
      "/product/412/ginger-412?pid=412",
      "/product/3112/bell-pepper-green-small-plat-3112?pid=3112",
      "/product/3114/hot-pepper-red-small-plat-3114?pid=3114",
      "/product/3115/hot-pepper-green-small-plat?pid=3115",
      "/product/580/white-cabbage-big-580?pid=580",
      "/product/3121/sweet-potatos-small-plat-3121?pid=3121",
      "/product/3800/hot-pepper-green-3800?pid=3800",
      "/product/3928/large-lemon-cork-3928?pid=3928",
      "/product/4803/large-lemon-medium-cork-4803?pid=4803",
      "/product/2284/long-pumpkin-2284?pid=2284",
      "/product/3640/bitter-melon-krilly-3640?pid=3640",
      "/product/4960/bell-pepper-green-medium-cork-4960?pid=4960",
      "/product/4961/hot-pepper-red-medium-cork?pid=4961",
      "/product/4962/hot-pepper-green-medium-cork?pid=4962",
      "/product/373/orange-naval-373?pid=373",
      "/product/151/avocado-151?pid=151",
      "/product/546/coconut-546?pid=546",
      "/product/372/green-apple-372?pid=372",
      "/product/3071/sweet-apple-small-plat-3071?pid=3071",
      "/product/4819/mango-fish-4819?pid=4819",
      "/product/4863/healthy-plate-4863?pid=4863",
      "/product/4936/sweet-apple-medium-cork-4936?pid=4936",
      "/product/378/kiwi-378?pid=378",
      "/product/3317/yellow-apple-small-plat-3317?pid=3317",
      "/product/379/red-plum-african-379?pid=379",
      "/product/3069/red-apple-medium-cork-3069?pid=3069",
      "/product/4937/yellow-apple-medium-cork-4937?pid=4937",
      "/product/385/kiwi-sungold-385?pid=385",
      "/product/3070/green-apple-small-plat-3070?pid=3070",
      "/product/4938/green-apple-medium-cork-4938?pid=4938",
      "/product/171/grape-fruit-171?pid=171",
      "/product/4602/red-apple-small-plat-4602?pid=4602",
      "/product/3065/red-plum-medium-plat-3065?pid=3065",
      "/product/221/pomelo?pid=221",
      "/product/3060/orange-for-juice-small-plat-3060?pid=3060",
      "/product/3085/mandarin-small-plat-3085?pid=3085",
      "/product/3926/mandarin-cork-3926?pid=3926",
      "/product/4806/mandarin-medium-cork-4806?pid=4806",
      "/product/374/orange-for-juice-374?pid=374",
      "/product/3925/orange-for-juice-cork-3925?pid=3925",
      "/product/4939/orange-for-juice-medium-cork-4939?pid=4939",
      "/product/4975/orange-for-juice-small-cartoon-4975?pid=4975",
      "/product/3921/orange-naval-cork-3921?pid=3921",
      "/product/653/green-grapes-653?pid=653",
      "/product/3059/orange-naval-small-plat-3059?pid=3059",
      "/product/198/baby-pineapple?pid=198",
      "/product/4940/orange-naval-medium-cork-4940?pid=4940",
      "/product/164/pineapple-philippines-164?pid=164",
      "/product/4976/orange-naval-small-cartoon-4976?pid=4976",
      "/product/4892/green-grapes-italy-4892?pid=4892",
      "/product/156/red-grapes-156?pid=156",
      "/product/3086/avocado-small-plat-3086?pid=3086",
      "/product/157/black-grapes-157?pid=157",
      "/product/200/sweet-tamarind-200?pid=200",
      "/product/375/banana-375?pid=375",
      "/product/656/sweet-apple-656?pid=656",
      "/product/1637/yellow-apple-1637?pid=1637",
      "/product/3959/watermelon-long-local-3959?pid=3959",
      "/product/3920/sweet-apple-cork-3920?pid=3920",
      "/product/3922/banana-cork-3922?pid=3922",
      "/product/3924/red-grapes-cork?pid=3924",
      "/product/4599/red-apple-kilo-4599?pid=4599",
      "/product/4861/mixed-apple-cork?pid=4861",
      "/product/668/pineapple?pid=668"
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  }
}
