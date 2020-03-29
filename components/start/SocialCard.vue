<template>
  <v-container class="">
    <div class="card__wrapper px-3 my-5">
      <v-img max-height="300px" :alt="content.img.alt" :src="content.img.src" />
      <h2 class="mt-3">{{ content.headline }}</h2>
      <p class="mt-3">{{ content.subline }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
.card__wrapper {
  width: 330px;
}
</style>
