import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

export default () => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GOOGLE_API_KEY,
      libraries: 'places' // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)
      // If you want to set the version, you can do so:
      // v: '3.26',
    },
    // autobindAllEvents: false,
    // If you want to manually install components, e.g.
    // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    // Vue.component('GmapMarker', GmapMarker)
    // then set installComponents to 'false'.
    // If you want to automatically install all the components this property must be set to 'true':
    installComponents: true
  })
}
