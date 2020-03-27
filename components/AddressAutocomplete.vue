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
      const location = {
        latitude: this.starting_address_obj.place.geometry.location.lat(),
        longitude: this.starting_address_obj.place.geometry.location.lng()
      }
      this.$emit('location', location)
    }
  },
  mounted () {
    console.log(this, window.google)
    const startingAddressInput = document.getElementById('starting_address')
    this.startingAddressAutocomplete = new window.google.maps.places.Autocomplete(startingAddressInput)
    this.startingAddressAutocomplete.addListener('place_changed', this.placeChanged)
  },
  methods: {
    placeChanged () {
      const place = this.startingAddressAutocomplete.getPlace()
      this.starting_address_obj = {
        place
      }
    }
  }
}
</script>
