<template>
  <v-container class="infobox pa-5">
    <h2 class="infobox__title">
      {{ company.name }}
    </h2>
    <p class="infobox__category subtitle-1">{{ company.category }}</p>
    <p class="infobox__address">
      {{ company.street }} {{ company.street_number }} <br>
      {{ company.postcode }} {{ company.city }}
    </p>
    <v-btn color="#000" dark outlined nuxt :to="`/${company.slug}`">
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
  }
}
</script>

<style lang="scss" scoped>
.infobox {
  &__title {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 0px;
    font-family: "IBM Plex Mono", "monospace";
  }

  &__category {
    text-transform: capitalize;
    margin-bottom: 12px;
  }

  &__address {
    line-height: 1.3;
  }
}

</style>
