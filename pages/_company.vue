<template>
  <div>
    <display-company v-if="company" :company="company" />
  </div>
</template>

<script>
import DisplayCompany from '@/components/DisplayCompany.vue'
import endpoints from '@/store/utils/endpoints.js'
export default {
  components: {
    DisplayCompany
  },
  async asyncData ({ $axios, params, error, store }) {
    const companies = store.state.companies
    if (companies.length) {
      const company = companies.find(c => c.slug === params.company)
      return company ? { company } : error({ statusCode: 404, message: 'Seite nicht gefunden' })
    }
    const apiUrl = process.env.API_URL
    const response = await $axios.$get(`${apiUrl}/api/v1/${endpoints.GET_COMPANIES_ENDPOINT}`)
    const company = response.find(c => c.slug === params.company)
    return company ? { company } : error({ statusCode: 404, message: 'Seite nicht gefunden' })
  }
}
</script>
