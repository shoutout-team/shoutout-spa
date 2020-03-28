<template>
  <a
    v-bind="link"
    @click="toggleIBAN"
  >
    <v-img v-if="!showIBAN" class="button" width="100%" :alt="payment.type" :src="images[payment.type]" />
    <p v-if="payment.type === 'bank' && showIBAN" class="title">Name: {{ payment.paymentInfo.holder }}</p>
    <p v-if="payment.type === 'bank' && showIBAN" class="title">IBAN: {{ payment.paymentInfo.iban }}</p>
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
  data () {
    return {
      mdiArrowRightThick,
      images: {
        paypal: require('~/assets/icon-paypal.png'),
        gofoundme: require('~/assets/icon-gofundme.png'),
        bank: require('~/assets/icon-transaction.png')
      },
      showIBAN: false
    }
  },
  computed: {
    link () {
      return this.payment.type !== 'bank' ? { href: this.payment.paymentInfo } : { disabled: true }
    }
  },
  methods: {
    toggleIBAN () {
      if (this.payment.type === 'bank') {
        this.showIBAN = !this.showIBAN
      }
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;

  &:hover {
    transform: translate(0%, -25%) scale(1.2);
  }
}
</style>
