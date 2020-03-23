<template>
  <v-flex xs12 md5 class="company-card black--text mt-7 mx-6">
    <v-layout>
      <v-flex
        d-flex
        flex-column
        justify-space-around
      >
        <v-flex
          d-flex
          flex-row
          justify-space-between
          align-baseline
        >
          <h1 class="$Plex-Sans-font-family">{{ headline }}</h1>
          <div class="text-right body-2 font-weight-bold">
            {{ distanceWithUnit }}
          </div>
        </v-flex>
        <p>{{ city }}, {{ street }} {{ hnr }}</p>
        <v-img
          :src="`https://picsum.photos/450/300?random=${headline}`"
          contain
        />
        <v-btn
          nuxt
          text
          :to="link"
          small
          dark
          color="black"
          class="button mt-3 ml-auto"
          depressed
        >
          jetzt supporten
        </v-btn>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      default: 'Frittebud'
    },
    category: {
      type: String,
      default: 'Restaurant'
    },
    street: {
      type: String,
      default: 'Konradadenerplatz'
    },
    hnr: {
      type: String,
      default: '25'
    },
    city: {
      type: String,
      default: 'Bonn'
    },
    distance: {
      type: Number,
      default: 0
    },
    link: {
      type: String,
      default: '/'
    }
  },
  computed: {
    distanceWithUnit () {
      return this.distance > 999 ? `${this.distance / 1000}km` : `${this.distance}m`
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  max-width: 200px;
  border-bottom: 1px solid black;
}

</style>
