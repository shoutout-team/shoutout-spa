<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12" sm="5" xl="4">
        <p class="body-1 text-left mb-0">
          Gib deinen Standort ein oder tippe die Postleitzahl ein.
        </p>
        <v-row>
          <v-col class="d-flex full-width align-center">
            <address-autocomplete :extra="{}" @location="getAddressData" />
            <v-btn
              color="white"
              fab
              small
              class=""
              @click="useLocation"
            >
              <v-icon>{{ mdiCrosshairsGps }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" xl="4" class="d-flex align-center">
        <p class="mr-7">
          Distanz
        </p>
        <v-slider
          v-model="maxDistance"
          min="0"
          max="50000"
          :thumb-size="48"
          :thumb-label="true"
          class="slider mr-7 mt-5"
          color="black"
          thumb-color="black"
          track-color="black"
        >
          <template v-slot:prepend>
            <p>0km</p>
          </template>
          <template v-slot:append>
            <p>21km</p>
          </template>
          <template v-slot:thumb-label="{ value }">
            {{ Math.round(value / 1000) }}km
          </template>
        </v-slider>
      </v-col>
    </v-row>
    <v-row justify="space-around" class="ml-0 checkbox__wrapper">
      <v-col cols="12" xl="10" class="d-flex justify-space-around flex-wrap">
        <div
          v-for="(cat, index) in categories"
          :key="index"
          class="mr-6 checkbox my-4 py-1 px-4"
          :class="{'checkbox--active': activeCategories.includes(cat)}"
          @click="activateCategory(cat)"
        >
          {{ cat }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCrosshairsGps } from '@mdi/js'
import AddressAutocomplete from '@/components/AddressAutocomplete.vue'

export default {
  components: {
    AddressAutocomplete
  },
  data () {
    return {
      mdiCrosshairsGps,
      maxDistance: 10000,
      activeCategories: ['cafe', 'bar', 'shop', 'coiffeur', 'kiosk', 'food', 'club']
    }
  },
  computed: {
    categories () {
      const mappedCategories = this.$store.state.companies.map(c => c.category)
      return [...new Set(mappedCategories)]
    }
  },
  watch: {
    maxDistance () {
      this.$emit('max-distance', this.maxDistance)
    },
    activeCategories () {
      this.$emit('filter-categories', this.activeCategories)
    }
  },
  mounted () {
    this.$emit('max-distance', this.maxDistance)
    this.$emit('filter-categories', this.activeCategories)
  },
  methods: {
    activateCategory (cat) {
      if (this.activeCategories.includes(cat)) {
        const index = this.activeCategories.indexOf(cat)
        this.activeCategories.splice(index, 1)
      } else {
        this.activeCategories.push(cat)
      }
    },
    useLocation () {
      this.$emit('location')
    },
    getAddressData (place) {
      const currentPlace = {
        coords: {
          latitude: place.latitude,
          longitude: place.longitude
        }
      }
      this.$store.dispatch('setLocation', currentPlace)
    }
  }
}
</script>

<style scoped lang="scss">
  .checkbox {
    cursor: pointer;
    text-transform: capitalize;
    border: 1px solid black;
    color: black;

    &--active {
      background-color: black;
      color: white;
    }
  }
  .fill-width {
    width: 100%;
  }
</style>
