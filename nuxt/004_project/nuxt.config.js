export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // burası default gibi davranıyor, page içindende aynı parametreler ile verilebilir
  head: {
    title: '004_project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
    ],
    script:[

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/transition.css"
  ],

  //dev:false,

  env:{
    baseUrl : "https://nuxt-js-kose-yazilarim-default-rtdb.firebaseio.com/",
  },

  //static bir web sitesi olarak ayarlamayı sağlar
  // generate:{
  // },
  //rootDir : "/my-app",
  //srcDir : "/client",

  // kendimiz route yapabiliriz
  // hata yönetimi içinde kullanıslı
  router:{
    extendRoutes(routes,resolve){
      routes.push({
        path:"/*",
        component: resolve(__dirname, "pages/index.vue")
      })
    }
  },

  transition:{
    name:"layout",
    mode:"out-in"
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // filter, direction, import
  plugins: [
    "~/plugins/Component.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // axios:{

  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
