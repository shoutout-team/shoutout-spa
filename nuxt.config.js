// import path from 'path'
// import fs from 'fs'
import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  serverMiddleware: [
    'redirect-ssl'
  ],
  mode: 'universal',

  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
  //   },
  //   host: '0.0.0.0'
  // },
  /*
  ** Headers of the page
  */

  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    API_URL: process.env.API_URL,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    API_KEY: process.env.API_KEY
  },
  head: {
    titleTemplate: 'Shoutout: Unterstütze kleine Geschäfte in deinem Viertel',
    title: 'Shoutout: Unterstütze kleine Geschäfte in deinem Viertel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shoutout bringt kleine Geschäfte und Unterstützer zusammen, um die Vielfalt in deinem Viertel zu bewahren. Finde Läden in deiner Nähe, die auf deinen Support angewiesen sind!' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700&isplay=swap' }, // font-family: 'IBM Plex Sans', sans-serif;
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,700&display=swap' } // font-family: 'IBM Plex Mono', monospace;
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/fonts/init_fonts.scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/InitGeocationComponent', ssr: false },
    { src: '~plugins/vue-carousel', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/sentry'
  ],

  sentry: {
    dsn: process.env.SENTRY_AUTH_TOKEN,
    config: {
      environment: process.env.NODE_EV,
      release: 'shoutout@' + process.env.npm_package_version,
      publishRelease: true
    },
    attachCommits: true,
    disabled: process.env.NODE_ENV === 'development',
    debug: process.env.NODE_ENV === 'development'
  },
  axios: {
    proxy: true,
    prefix: '/api/v1/',
    headers: {
      common: {
        api_key: process.env.API_KEY
      }
    }
  },
  proxy: {
    '/api/v1/': { target: process.env.API_URL || 'https://shoutout-app-api-preview.herokuapp.com' }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#000000',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#000000'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    /*
    ** You can extend webpack config here
    */

    extend (config, ctx) {

    }
  }
}
