<template>
  <v-layout
    justify-center
    align-center
    class="donation"
  >
    <v-icon color="#000" width="60" large class="donation-icon" @click="$emit('close')">
      {{ mdiClose }}
    </v-icon>
    <v-flex class="donation__list mt-12">
      <h1 class="text-center display-2 font-weight-bold">So kannst du spenden:</h1>
      <v-flex
        class="mt-6"
        d-flex
        flex-column
        justify-space-around
        align-center
      >
        <Donate-Element :payment-info="payments" payment-type="paypal" />
        <Donate-Element :payment-info="payments" payment-type="gofoundme" />
        <Donate-Element :payment-info="payments" payment-type="bank" />
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiClose } from '@mdi/js'
import DonateElement from '~/components/DonateElement'

export default {
  components: {
    DonateElement
  },
  props: {
    payments: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      mdiClose
    }
  }
}
</script>

<style scoped lang="scss">
.donation {
  position: relative;

  &__list {
    height: 100vh;
  }
}

.donation-icon {
  position: absolute !important;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
