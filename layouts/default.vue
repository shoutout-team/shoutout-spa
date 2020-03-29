<template>
  <v-app light>
    <Header />
    <nuxt />
    <v-container>
      <v-row justify="center">
        <v-col cols="6" xl="5">
          <a href="https://www.instagram.com/shoutout.jetzt/" target="_blank">
            <img src="/instagram.png" alt="facebook" class="share mr-8">
          </a>
        </v-col>
        <v-col cols="6" xl="5" class="text-right">
          <v-btn text class="button" nuxt to="/impressum">
            Impressum
          </v-btn>
          <v-btn text class="button" nuxt to="/datenschutz">
            Datenschutz
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  components: { Header },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Split Screen',
          to: '/splitscreen'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Map Test',
          to: '/mapTest'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted () {
    this.$store.dispatch('initialFetch')
    this.$sentry.captureException(new Error('example'))
  },
  methods: {
    test () {
      this.statusNav = !this.statusNav
    },
    toggleStatus (value) {
      this.statusNav = value
    }
  }
}
</script>
<style lang="scss" scoped>

.ly-footer {
  margin-top: 50px;
  height: 50px;
}
.button {
  color: black;
}
</style>
