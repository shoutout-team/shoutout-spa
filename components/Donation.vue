<template>
  <v-container>
    <v-row>
      <v-col>
        <v-icon color="#000" width="60" large class="donation-icon" @click="$emit('close')">
          {{ mdiClose }}
        </v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="text-center display-2 font-weight-bold my-9">
          So kannst du spenden:
        </h1>
      </v-col>
    </v-row>
    <div v-for="(payment, key) in paymentsArray" :key="key">
      <v-row v-if="payment.paymentInfo" justify="center" class="py-7 my-3 payment__wrapper">
        <v-col
          cols="4"
          sm="3"
          md="2"
          lg="3"
          xl="2"
        >
          <Donate-Element :payment="payment" />
        </v-col>
      </v-row>
    </div>
  </v-container>
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
      required: true
    }
  },
  data () {
    return {
      mdiClose
    }
  },
  computed: {
    paymentsArray () {
      const tempArray = []
      Object.keys(this.payments).forEach((e, index) => {
        if (e === 'bank') {
          if (this.payments[e].iban) {
            tempArray.push({
              type: e,
              paymentInfo: this.payments[e]
            })
          }
        } else if (this.payments[e]) {
          tempArray.unshift({
            type: e,
            paymentInfo: this.payments[e]
          })
        }
      })
      return tempArray
    }
  }
}
</script>

<style scoped lang="scss">

.payment__wrapper {
  background-color: #F6F6F6;
}

.donation-icon {
  position: absolute !important;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
