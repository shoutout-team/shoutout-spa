<template>
  <v-layout
    justify-center
  >
    <v-flex
      xs12
      sm12
      md8
      justify-center
      class="mx-5"
    >
    <h1 class="display-2 font-weight-bold mt-5" color="black">Welches Viertel darf es sein?</h1>
      <Filter-Companies
        @location="useLocation"
        @max-distance="setMaxDistance"
        @filter-categories="setFilterCategories"
      />
      <v-flex
        d-flex
        flex-row
        justify-space-around
        align-end
        class="landscapeButton mb-9"
      >
        <v-btn class="mx-2 mt-4" fab dark color="black" @click="listView = !listView">
          <v-icon color="white">
            {{ mdiMapOutline }}
          </v-icon>
        </v-btn>
        <p class="ml-3 mb-0">Ansicht als Karte</p>
      </v-flex>
      <ListOverview
        v-if="listView"
        :max-distance="maxDistance"
        :filter-categories="filterCategories"
      />
      <Google-Map v-if="!listView" />
    </v-flex>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-layout>
</template>

<script>
import { mdiMapOutline } from '@mdi/js'
import getPosition from '~/plugins/geolocation'
import ListOverview from '~/components/ListOverview'
import GoogleMap from '~/components/GoogleMap'
import FilterCompanies from '~/components/FilterCompanies'

export default {
  components: {
    ListOverview,
    FilterCompanies,
    GoogleMap
  },
  data () {
    return {
      maxDistance: 0,
      listView: true,
      filterCategories: [],
      mdiMapOutline
    }
  },
  computed: {
    location () {
      return this.$store.state.location
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    setMaxDistance (payload) {
      this.maxDistance = payload
    },
    setFilterCategories (payload) {
      this.filterCategories = payload
    },
    useLocation () {
      this.$store.dispatch('setLoading', true)
      getPosition(this.saveToStore)
    },
    saveToStore (pos) {
      this.$store.dispatch('setLocation', pos)
      this.$store.dispatch('setLoading', false)
    }
  }
}
</script>

<style scoped lang="scss">
.landscapeButton {
  width: 168px;
}
</style>
