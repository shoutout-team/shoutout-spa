<template>
  <display-company :company="company" />
</template>

<script>
import endpoints from '~/store/utils/endpoints.js'
import DisplayCompany from '@/components/DisplayCompany.vue'

export default {
  components: {
    DisplayCompany
  },
  async validate ({ params, store }) {
    let { companies } = store.state
    if (companies.length === 0) {
      companies = await this.$axios.$get(endpoints.GET_COMPANIES_ENDPOINT)
    }
    return companies.find(el => el.slug === params.company)
  },
  computed: {
    company () {
      return this.$store.state.companies.find(el => el.slug === this.$route.params.company)
    }
  }
}
</script>
