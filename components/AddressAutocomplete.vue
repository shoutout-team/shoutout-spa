<template>
  <v-text-field
    id="starting_address"
    :value="starting_address"
    type="text"
    hide-details="auto"
    width="100%"
    tile
    placeholder=""
    color="#000"
    label="Adresse"
    v-bind="extra"
  />
</template>

<script>
export default {
  props: {
    extra: {
      type: Object,
      default () {
        return {
          outlined: true
        }
      }
    }
  },
  data () {
    return {
      // Destination data items
      starting_address: '',
      starting_address_obj: {},
      startingAddressAutocomplete: null
    }
  },
  watch: {
    starting_address_obj () {
      console.log(this.starting_address_obj.place.address_components)
      const elements = ['locality', 'route', 'postal_code', 'street_number']
      const geolocation = this.starting_address_obj.place.address_components.filter(e => elements.includes(e.types[0]))
      const location = {
        latitude: this.starting_address_obj.place.geometry.location.lat(),
        longitude: this.starting_address_obj.place.geometry.location.lng()
      }
      geolocation.forEach((e) => {
        location[e.types[0]] = e.long_name
      })
      this.$emit('location', location)
    }
  },
  mounted () {
    this.initalGoogleSetup()
  },
  methods: {
    async initalGoogleSetup () {
      if (process.client) {
        await this.$gmapApiPromiseLazy({})
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
