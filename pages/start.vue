<template>
  <v-container>
    <forward-section />
    <wall />
    <slider />
  </v-container>
</template>

<script>
import ForwardSection from '@/components/start/ForwardSection.vue'
import Wall from '@/components/start/Wall.vue'
import Slider from '@/components/start/Slider.vue'

export default {
  name: 'Start',
  components: {
    ForwardSection,
    Wall,
    Slider
  }
}
</script>
