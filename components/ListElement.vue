<template>
  <v-col cols="12" md="6" xl="5" class="mb-12">
    <v-flex
      d-flex
      flex-column
      justify-space-around
    >
      <v-row justify="space-between">
        <v-col class="pb-0">
          <h1 class="$Plex-Sans-font-family">
            {{ headline }}
          </h1>
        </v-col>
        <v-col class="pb-0">
          <div class="text-right body-2 font-weight-bold">
            {{ distanceWithUnit }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <p>{{ city }}, {{ street }} {{ hnr }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pb-4">
          <div class="img">
            <v-img
              :src="`https://picsum.photos/450/300?random=${headline}`"
              contain
              height="100%"
              class="img__outside"
            />
            <v-img class="ml-auto img__inner" width="60%" alt="tape" :src="require('@/assets/shoutout-tape.png')" >
              <p class="img__inner-text">
                {{ category }}
              </p>
            </v-img>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="d-flex">
          <v-btn
            nuxt
            text
            :to="link"
            small
            dark
            tile
            color="black"
            class="button mt-3 ml-auto px-0 text-lowercase"
            depressed
          >
            jetzt supporten
          </v-btn>
        </v-col>
      </v-row>
    </v-flex>
  </v-col>
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

.img {
  position: relative;
  &__outside {
    position: relative;
    top: 15px;
    right: 15px;
  }
  &__inner {
    position: absolute;
    top: 0px;
    right: 0px;
    &-text {
      font-family: theRambler;
      text-align: center;
      font-size: 60px;
    }
  }
}
</style>
