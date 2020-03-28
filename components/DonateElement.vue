<template>
  <a>
    <v-img width="100%" class="image" :alt="payment.type" :src="images[payment.type]" />
  </a>
</template>

<script>
import { mdiArrowRightThick } from '@mdi/js'

export default {
  props: {
    payment: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    console.log(this.payment)
  },
  data () {
    return {
      mdiArrowRightThick,
      images: {
        paypal: require('~/assets/icon-paypal.png'),
        gofoundme: require('~/assets/icon-gofundme.png')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.image {
  width: 50%;
}
</style>
