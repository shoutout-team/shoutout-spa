<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(card, key) in 5"
        :key="key"
        cols="12"
        sm="6"
        md="6"
        lg="4"
      >
        <card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/start/card.vue'

export default {
  components: {
    Card
  }
}
</script>
