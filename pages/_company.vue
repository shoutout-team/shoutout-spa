<template>
  <div>
    <display-company v-if="company" :company="company" />
  </div>
</template>

<script>
import DisplayCompany from '@/components/DisplayCompany.vue'

export default {
  components: {
    DisplayCompany
  },
  async asyncData ({ $axios, params, error }) {
    const apiUrl = process.env.API_URL
    const response = await $axios.$get(`${apiUrl}/api/v1/companies.json`)
    const res = response.find(el => el.slug === params.company)
    if (res) { return { company: res } } else {
      error({ statusCode: 404, message: 'Seite nicht gefunden' })
    }
  },
  computed: {
    initialFetchCompleted () {
      return this.$store.state.initialFetchCompleted
    }
  },
  watch: {
    initialFetchCompleted (state) {
      if (state && !this.company) {

      }
    }
  }
}
</script>
