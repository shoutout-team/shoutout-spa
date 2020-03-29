<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xl="10">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in 5"
            :key="i"
          >
            <social-card />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SocialCard from '@/components/start/SocialCard.vue'

export default {
  components: {
    SocialCard
  }
}
</script>
