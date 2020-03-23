<template>
  <v-flex class="justify-center my-12">
    <v-btn
      v-if="paymentType !== 'bank'"
      icon
      width="100%"
      link
      :href="paymentInfo[paymentType]"
      target="_blank"
    >
      <v-img class="image" :alt="paymentType" :src="images[paymentType]" />
    </v-btn>
    <p v-if="paymentType === 'bank'" class="pt-7 text-center">
      Name: <nobr>Max Mustermann</nobr> <br>
      IBAN: <nobr>0011 1111 3333 3322</nobr>
    </p>
  </v-flex>
</template>

<script>
import { mdiArrowRightThick } from '@mdi/js'

export default {
  props: {
    paymentInfo: {
      type: Object,
      default: () => {}
    },
    paymentType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdiArrowRightThick,
      paymentHeadlines: {
        paypal: 'PayPal',
        gofoundme: 'GoFundMe',
        bank: 'Banküberweisung'
      },
      images: {
        paypal: require('~/assets/icon-paypal.png'),
        gofoundme: require('~/assets/icon-gofundme.png')
      }
    }
  },
  computed: {
    distanceWithUnit () {
      return this.distance > 999 ? `${this.distance / 1000}km` : `${this.distance}m`
    }
  }
}
</script>

<style scoped lang="scss">
.image {
  width: 50%;
}
</style>
