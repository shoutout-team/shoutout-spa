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
  mounted () {
    /* eslint-disable */
    let self = this
    let starting_address_input = document.getElementById('starting_address')
    let starting_address_autocomplete = new google.maps.places.Autocomplete(starting_address_input)
    starting_address_autocomplete.addListener('place_changed', function() {
      let place = starting_address_autocomplete.getPlace();
      self.starting_address_obj = {
       place
      }
    });
  },
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
    }
  },
  watch: {
    starting_address_obj: function () {
      const location = {
        latitude: this.starting_address_obj.place.geometry.location.lat(),
        longitude: this.starting_address_obj.place.geometry.location.lng()
      };
      this.$emit('location', location);
    }
  }
}
</script>
