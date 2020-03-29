<template>
  <v-app light>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <v-row align="center">
            <v-col cols="6">
              <nuxt-link to="/">
                <img src="~/assets/logo.png" alt="Shoutout!" class="ly-logo">
              </nuxt-link>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
              <v-row class="flex-column flex-sm-row">
                <v-col class="d-flex justify-end justify-sm-center">
                  <v-btn class="font-weight-bold" depressed nuxt to="/overview">Übersicht</v-btn>
                </v-col>
                <v-col class="d-flex justify-end justify-sm-center">
                  <v-btn class="font-weight-bold" depressed nuxt to="/signup">Für Unternehmen</v-btn>
                </v-col>
                <v-col class="d-flex justify-end justify-sm-center">
                  <v-btn class="font-weight-bold" depressed nuxt to="/about-us">Über uns</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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

export default {
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
.ly-header {
  max-height: 100px;
}
.ly-logo {
  width: 120px;
}

.ly-footer {
  margin-top: 50px;
  height: 50px;
}
.button {
  color: black;
}
</style>
