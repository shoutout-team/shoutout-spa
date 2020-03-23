<template>
  <v-container class="pa-3">
    <h2 class="headline mb-3">
      {{ company.name }}
    </h2>
    <p>{{ cutDesc }}</p>
    <v-btn nuxt :to="`/${company.slug}`">
      Zum Profil
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'GeoInfoBox',
  props: {
    company: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    cutDesc () {
      return `${this.company.properties.description.substring(1, 200)}...`
    }
  }
}
</script>
