<template>
  <v-app light>
    <v-container>
      <v-row>
        <v-col cols="12">
          <nuxt-link to="/">
            <img src="~/assets/logo.png" alt="Shoutout!" class="ly-logo">
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
    <nuxt />
    <v-container>
      <v-row>
        <v-col cols="12" class="text-right">
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
  }
}
</script>
<style>
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
