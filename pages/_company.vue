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
  computed: {
    company () {
      return this.$store.state.companies.find(el => el.slug === this.$route.params.company)
    }
  }
}
</script>
