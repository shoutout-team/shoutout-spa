<template>
  <v-container>
    <v-row cols="12" xl="10" class="mb-7">
      <v-col>
        <h1 class="display-2 font-weight-black mt-5" color="black">Welches Viertel darf es sein?</h1>
      </v-col>
    </v-row>
    <v-row cols="12" xl="10">
      <v-col>
        <Filter-Companies
          @location="useLocation"
          @max-distance="setMaxDistance"
          @filter-categories="setFilterCategories"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xl="10" class="d-flex align-center">
        <v-btn class="mx-2 mt-4" fab dark color="black" @click="listView = !listView">
          <v-icon color="white">
            {{ mdiMapOutline }}
          </v-icon>
        </v-btn>
        <p class="ml-3 mb-0">
          Ansicht als<br> Karte
        </p>
      </v-col>
    </v-row>
    <ListOverview
      v-if="listView"
      :max-distance="maxDistance"
      :filter-categories="filterCategories"
    />
    <Google-Map v-if="!listView" />
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-container>
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
