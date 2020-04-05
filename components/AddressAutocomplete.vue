<template>
  <v-form @submit.prevent="geolocate">
    <v-text-field
      id="starting_address"
      v-model="starting_address"
      type="text"
      hide-details="auto"
      width="100%"
      tile
      placeholder=""
      color="#000"
      label="Adresse"
      v-bind="extra"
      @blur="geolocate"
    />
  </v-form>
</template>

<script>
import GeolocationMixin from '@/mixins/geolocation.js'

export default {
  mixins: [GeolocationMixin],
  props: {
    extra: {
      type: Object,
      default () {
        return {
          outlined: true
        }
      }
    },
    activateReGeolocate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // Destination data items
      starting_address: '',
      starting_address_obj: {},
      startingAddressAutocomplete: null,
      geocoder: ''
    }
  },
  computed: {
    location () {
      return this.$store.state.location.coords
    }
  },
  watch: {
    starting_address_obj () {
      const elements = ['locality', 'route', 'postal_code', 'street_number']
      if (!this.starting_address_obj.place.address_components) { return }
      const geolocation = this.starting_address_obj.place.address_components.filter(e => elements.includes(e.types[0]))
      const location = {
        latitude: this.starting_address_obj.place.geometry.location.lat(),
        longitude: this.starting_address_obj.place.geometry.location.lng()
      }
      geolocation.forEach((e) => {
        location[e.types[0]] = e.long_name
      })
      this.$emit('location', location)
    },
    location () {
      if (window.google) {
        this.reGeolocate(this.location)
      }
    }
  },
  mounted () {
    this.initalGoogleSetup()
  },
  methods: {
    async initalGoogleSetup () {
      if (process.client) {
        await this.$gmapApiPromiseLazy({})
        this.geocoder = new window.google.maps.Geocoder()
        if (this.activateReGeolocate) {
          this.reGeolocate(this.location)
        }
        this.autocompleteService = new window.google.maps.places.AutocompleteService()
        this.geocoderService = new window.google.maps.Geocoder()
        this.addChangeListener()
      }
    },
    addChangeListener () {
      const startingAddressInput = document.getElementById('starting_address')
      this.startingAddressAutocomplete = new window.google.maps.places.Autocomplete(startingAddressInput)
      this.startingAddressAutocomplete.addListener('place_changed', this.placeChanged)
    },
    placeChanged () {
      const place = this.startingAddressAutocomplete.getPlace()
      this.starting_address_obj = {
        place
      }
    }
  }
}
</script>
