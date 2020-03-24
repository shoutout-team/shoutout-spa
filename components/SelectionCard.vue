<template>
  <div>
    <v-img
      class="mb-7"
      :alt="selectionType.img.alt"
      :src="selectionType.img.src"
    />
    <h2 class="display-2 mb-7">
      {{ selectionType.headline }}
    </h2>
    <p class="mb-7">
      {{ selectionType.desc }}
    </p>
    <v-btn
      tile
      depressed
      block
      dark
      color="black"
      class="button py-7 d-{lg}-{py-8}"
      nuxt
      :to="selectionType.btn.to"
    >
      {{ selectionType.btn.text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    selectionType: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">

</style>
