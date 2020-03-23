<template>
  <v-app light>
    <v-layout justify-center class="ly-header">
      <v-flex
        xs12
        sm12
        md8
        class="mx-5 mt-3 mb-5"
      >
        <nuxt-link to="/overview">
          <img src="~/assets/logo.png" alt="Shoutout!" class="ly-logo">
        </nuxt-link>
      </v-flex>
    </v-layout>
    <nuxt />
    <v-layout justify-center class="ly-footer text-right">
      <v-flex
        xs12
        sm12
        md8
        class="mx-5 mt-3 mb-5"
      >
        <v-btn depressed class="button" nuxt to="/impressum">
          Impressum
        </v-btn>
        <!--<nuxt-link to="/overview">Datenschutz</nuxt-link> -->
      </v-flex>
    </v-layout>
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
