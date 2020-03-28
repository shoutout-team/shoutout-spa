<template>
  <div>
    <div>
      <slot />
    </div>
    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 100vh;"
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
        <geo-info-box v-if="activeCompany.id" :company="activeCompany" />
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
      activeCompany: { id: null },
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
        bar: require('~/assets/bar-active.png'),
        kiosk: require('~/assets/kiosk-active.png'),
        cafe: require('~/assets/cafe-active.png'),
        food: require('~/assets/food-active.png'),
        coiffeur: require('~/assets/barber-active.png'),
        shop: require('~/assets/shop-active.png')
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
          id: el.id,
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
      if (this.activeCompany.id === marker.id) {
        this.infoWindow.infoWindowOpenStatus = !this.infoWindow.infoWindowOpenStatus
      } else {
        this.infoWindow.infoWindowOpenStatus = true
        const newActive = this.companies.find(el => el.id === marker.id)
        this.activeCompany = newActive
      }
    }
  }
}
</script>
