<template>
  <div>
    <v-row justify="space-between" align="end" no-gutters class="mb-5">
      <v-col cols="12" sm="5" xl="4">
        <p class="body-1 text-left mb-0">
          Gib deinen Standort frei oder tippe die Postleitzahl ein.
        </p>
        <v-row no-gutters class="mb-10 mb-sm-0">
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
        <p class="mr-7 mb-3">
          Distanz
        </p>
        <v-slider
          v-model="maxDistance"
          min="0"
          max="50000"
          :thumb-size="48"
          :thumb-label="true"
          class="slider mr-7"
          color="black"
          thumb-color="black"
          track-color="black"
          hide-details
        >
          <template v-slot:prepend>
            <p>0km</p>
          </template>
          <template v-slot:append>
            <p>50km</p>
          </template>
          <template v-slot:thumb-label="{ value }">
            {{ Math.round(value / 1000) }}km
          </template>
        </v-slider>
      </v-col>
    </v-row>
    <v-row justify="start" no-gutters class="ml-0 checkbox__wrapper">
      <v-col cols="12" xl="10" class="d-flex flex-wrap">
        <div
          v-for="(cat, index) in categories"
          :key="index"
          class="mr-3 mr-md-6 checkbox my-4 py-1 py-md-2 px-3 px-md-4"
          :class="{'checkbox--active': activeCategories.includes(cat)}"
          @click="activateCategory(cat)"
        >
          {{ cat }}
        </div>
      </v-col>
    </v-row>
  </div>
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
      initialActivated: true,
      activeCategories: ['cafe', 'bar', 'shop', 'coiffeur', 'kiosk', 'food', 'club', 'artist', 'service', 'beauty', 'culture']
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
      if (this.initialActivated) {
        this.activeCategories = []
        this.initialActivated = false
      }
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
