<template>
  <v-layout
    justify-center
    align-center
    class="selectionCard my-12 mx-7"
  >
    <v-flex
      d-flex
      flex-column
      justify-center
    >
      <v-img class="image mx-auto mb-7" :alt="selectionType.img.alt" :src="selectionType.img.src" />
      <h2 class="display-2 mb-7">
        {{ selectionType.headline }}
      </h2>
      <p class="mb-7">
        {{ selectionType.desc }}
      </p>
      <v-btn
        tile
        depressed
        color="black"
        class="button py-7 d-{lg}-{py-8}"
        nuxt
        :to="selectionType.btn.to"
      >
        {{ selectionType.btn.text }}
      </v-btn>
    </v-flex>
  </v-layout>
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
.selectionCard {
  width: 60%;
  max-width: 450px;
  .image {
    width: 90%;
  }
  .button {
    color: white;
    max-width: 300px;
  }
}

</style>
