<template>
  <div>
    <div>
      <slot />
    </div>
    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 60vh;"
      :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
    >
      <gmap-info-window :options="infoWindow.infoOptions" :position="infoWindow.infoWindowPosition" :opened="infoWindow.infoWindowOpenStatus" @closeclick="infoWindow.infoWindowOpenStatus=false">
        <geo-info-box v-if="activeCompany.gid" :company="activeCompany" />
      </gmap-info-window>
      <gmap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :icon="marker.icon"
        :clickable="true"
        :animation="2"
        @click="toggleInfoWindow(marker)"
      />
    </gmap-map>
  </div>
</template>

<script>
import GeoInfoBox from './GeoInfobox'
export default {
  name: 'GoogleMap',
  components: {
    GeoInfoBox
  },
  props: {
    filterCategories: {
      type: Array,
      required: true
    },
    maxDistance: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      activeCompany: { gid: null },
      places: [],
      infoWindow: {
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        infoWindowPosition: null,
        infoWindowOpenStatus: false
      },
      icons: {
        kiosk: require('~/assets/kiosk-active.png'),
        bar: require('~/assets/bar-active.png'),
        club: require('~/assets/fallback-category-icon.svg'),
        cafe: require('~/assets/cafe-active.png'),
        food: require('~/assets/food-active.png'),
        coiffeur: require('~/assets/barber-active.png'),
        shop: require('~/assets/shop-active.png'),
        service: require('~/assets/fallback-category-icon.svg'),
        beauty: require('~/assets/fallback-category-icon.svg'),
        culture: require('~/assets/fallback-category-icon.svg'),
        artist: require('~/assets/fallback-category-icon.svg')
      },
      defaultZoom: 13
    }
  },
  computed: {
    companies () {
      return this.$store.state.companies
    },
    center () {
      return {
        lat: Number(this.$store.state.location.coords.latitude),
        lng: Number(this.$store.state.location.coords.longitude)
      }
    },
    markers () {
      const markerArray = []
      this.companies.filter(e => this.filterCategories.includes(e.category)).forEach((el) => {
        markerArray.push({
          gid: el.gid,
          icon: this.icons[el.category] || require('~/assets/bar-active.png'),
          position: { lat: Number(el.latitude), lng: Number(el.longitude) }
        })
      })
      return markerArray
    },
    zoom () {
      let result = 0
      this.maxDistance < 800 ? result = 5 * (1000 / 800) : result = 5 * (1000 / this.maxDistance)
      return this.defaultZoom + result
    }
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    updatePosition () {
      if (this.currentPlace) {
        this.currentPlace = null
        const currentPosition = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.center = currentPosition
      }
    },
    toggleInfoWindow (marker) {
      this.infoWindow.infoWindowPosition = marker.position
      if (this.activeCompany.gid === marker.gid) {
        this.infoWindow.infoWindowOpenStatus = !this.infoWindow.infoWindowOpenStatus
      } else {
        this.infoWindow.infoWindowOpenStatus = true
        const newActive = this.companies.find(el => el.gid === marker.gid)
        this.activeCompany = newActive
      }
    }
  }
}
</script>
