export default {
  methods: {
    geolocate (e) {
      this.geocoder.geocode({ address: this.starting_address }, (results) => {
        const currentPlace = {
          latitude: results[0].geometry.location.lat(),
          longitude: results[0].geometry.location.lng()
        }
        results[0].address_components.forEach((e) => {
          currentPlace[e.types[0]] = e.long_name
        })
        this.$emit('location', currentPlace)
      })
    },
    reGeolocate (coords) {
      const latlng = new window.google.maps.LatLng(coords.latitude, coords.longitude)
      this.geocoder.geocode({ latLng: latlng }, (results) => {
        this.starting_address = results[1].formatted_address
      })
    }
  }
}
