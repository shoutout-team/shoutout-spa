<template>
  <div>
    <div class="overview-filter py-5">
      <v-container>
        <v-row justify="center" class="mb-1">
          <v-col cols="12" xl="10">
            <h1 class="display-2 font-weight-black mb-10" color="black">Welches Viertel darf es sein?</h1>
            <Filter-Companies
              @location="useLocation"
              @max-distance="setMaxDistance"
              @filter-categories="setFilterCategories"
            />
          </v-col>
        </v-row>
        <v-row v-if="sortedCompanys.length > 0" justify="center">
          <v-col cols="12" xl="10" class="d-flex align-center">
            <v-btn class="mx-2 mt-3 mb-3" fab dark color="black" @click="listView = !listView">
              <v-icon color="white">
                {{ mdiMapOutline }}
              </v-icon>
            </v-btn>
            <p class="ml-3 mb-0">
              Ansicht als<br> Karte
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <empty-overview-page v-if="sortedCompanys.length === 0" />
    </v-container>
    <ListOverview
      v-if="listView && sortedCompanys.length > 0"
      :sorted-companys="sortedCompanys"
    />
    <v-container>
      <v-row no-gutter justify="center">
        <v-col cols="12" xl="10">
          <Google-Map v-if="!listView && companies.length > 0" :filter-categories="filterCategories" :max-distance="maxDistance" />
        </v-col>
      </v-row>
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64" />
      </v-overlay>
    </v-container>
  </div>
</template>

<script>
import { mdiMapOutline } from '@mdi/js'
import getPosition from '~/plugins/geolocation'
import ListOverview from '~/components/ListOverview'
import GoogleMap from '~/components/GoogleMap'
import FilterCompanies from '~/components/FilterCompanies'
import EmptyOverviewPage from '~/components/empty-overview-page.vue'
import companyFilter from '~/mixins/companyFilter.js'

export default {
  components: {
    ListOverview,
    FilterCompanies,
    GoogleMap,
    EmptyOverviewPage
  },
  mixins: [companyFilter],
  data () {
    return {
      maxDistance: 0,
      listView: true,
      filterCategories: [],
      mdiMapOutline
    }
  },
  computed: {
    companies () {
      return this.$store.state.companies
    },
    location () {
      return this.$store.state.location
    },
    loading () {
      return this.$store.state.loading
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', false)
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

.overview-filter {
  background-color: #eeede8;
}
</style>
