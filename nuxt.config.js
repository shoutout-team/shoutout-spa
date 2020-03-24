// import path from 'path'
// import fs from 'fs'
import colors from 'vuetify/es5/util/colors'

export default {
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
    TESTVAR: 1234
  },

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Shoutout - Rette deine Lieblingsläden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap' }, // font-family: 'IBM Plex Sans', sans-serif;
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap' } // font-family: 'IBM Plex Mono', monospace;
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/InitGeocationComponent', ssr: false }
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
    '@nuxtjs/pwa'
  ],
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
