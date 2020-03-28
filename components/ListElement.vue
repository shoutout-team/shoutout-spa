<template>
  <v-col cols="12" sm="11" md="6" xl="4" class="mb-12">
    <nuxt-link :to="link" class="list-element">
      <v-flex
        d-flex
        flex-column
        justify-space-around
        class="list-element__wrapper"
      >
        <v-row justify="space-between" no-gutters>
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
        <v-row no-gutters>
          <v-col class="py-0">
            <p>{{ city }}, {{ street }} {{ hnr }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-4">
            <div class="list-element__img">
              <v-img
                :src="image || `https://picsum.photos/450/300?random=${headline}`"
                contain
                height="100%"
                class="list-element__img-outside"
              />
              <v-img class="ml-auto list-element__img-inner" width="60%" alt="tape" :src="require('@/assets/shoutout-tape.png')">
                <p class="list-element__img-inner-text">
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
    </nuxt-link>
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
    },
    image: {
      type: String,
      default: ''
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
.list-element {
  text-decoration: none;

  &:hover {
    .list-element__wrapper {
      transition: transform 200ms ease;
      transform: scale(1.005);
    }

    .list-element__img-inner {
      transform: rotate(3deg);
    }
  }

  &__wrapper {
    transition: transform 200ms ease;
  }

  &__img {
    position: relative;
  }

  &__img-outside {
    position: relative;
  }

  &__img-inner {
    text-transform: capitalize;
    position: absolute;
    top: -15px;
    right: -15px;
    transition: transform 200ms ease;

    &-text {
      font-family: theRambler;
      text-align: center;
      font-size: 60px;
    }
  }
}

.button {
  max-width: 200px;
  border-bottom: 1px solid black;
}

</style>
