<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          :alt="selectionType.img.alt"
          :src="selectionType.img.src"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <h2 class="display-1 mb-5 font-weight-black">
          {{ selectionType.headline }}
        </h2>
        <p class="mb-0">
          {{ selectionType.desc }}
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-btn
          tile
          depressed
          dark
          width="80%"
          color="black"
          class="button mb-3 py-7 d-{lg}-{py-8}"
          nuxt
          :to="selectionType.btn.to"
        >
          {{ selectionType.btn.text }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
