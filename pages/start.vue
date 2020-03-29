<template>
  <v-container>
    <forward-section />
    <wall />
    <slider />
    <Accordion title="Dies ist ein Test" body="1242421 312 31 24 124 23 312" />
  </v-container>
</template>

<script>
import ForwardSection from '@/components/start/ForwardSection.vue'
import Wall from '@/components/start/Wall.vue'
import Slider from '@/components/start/Slider.vue'
import Accordion from '@/components/start/accordion.vue'

export default {
  name: 'Start',
  components: {
    ForwardSection,
    Wall,
    Slider,
    Accordion
  }
}
</script>
