import colors from 'vuetify/es5/util/colors'
import en from './locales/en.json'
import cz from './locales/cz.json'
import sk from './locales/sk.json'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Ales Jandera',
    title: 'ajandera',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/auth-next'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/i18n"
  ],

  i18n: {
    locales: ['en', 'cz', 'sk'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {en, cz, sk}
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'jwt.access_token',
          maxAge: 60,
          global: true,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'jwt.refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24
        },
        user: {
          property: 'user'
        },
        endpoints: {
          login: { url: '/auth', method: 'post' },
          refresh: { url: '/refresh', method: 'post' },
          user: { url: '/me', method: 'get' },
          logout: { url: '/logout', method: 'post' }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    hostname: process.env.VUE_APP_API || 'http://localhost:8000/',
    username: process.env.VUE_APP_USERNAME,
    password: process.env.VUE_APP_PW,
    site: process.env.VUE_APP_SITE_ID,
    storage: process.env.VUE_APP_STORAGE,
    axios: {
      baseURL: process.env.VUE_APP_API || 'http://localhost:8000/'
    }
  }
}
