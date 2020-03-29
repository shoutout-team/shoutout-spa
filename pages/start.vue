<template>
  <div>
    <v-container>
      <forward-section />
      <wall />
      <slider />
    </v-container>
    <Faq />
  </div>
</template>

<script>
import ForwardSection from '@/components/start/ForwardSection.vue'
import Wall from '@/components/start/Wall.vue'
import Slider from '@/components/start/Slider.vue'
import Faq from '@/components/start/faq.vue'

export default {
  name: 'Start',
  components: {
    ForwardSection,
    Wall,
    Slider,
    Faq
  }
}
</script>
