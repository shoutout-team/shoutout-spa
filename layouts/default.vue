<template>
  <v-app light>
    <Header />
    <nuxt class="content__bottom" />
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
export default {
  components: { Header, Footer },
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
  },
  methods: {
    toggleStatus (value) {
      this.statusNav = value
    }
  }
}
</script>

<style scoped lang="scss">
.content__bottom {
  margin-bottom: 540px;

  @media screen and (min-width: 340px) {
    margin-bottom: 493px;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 394px;
  }
}
</style>
