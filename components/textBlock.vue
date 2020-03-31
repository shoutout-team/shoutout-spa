<template>
  <div>
    <h2 v-if="content.headline" class="textblock__headline text-uppercase mt-12 mb-3">
      {{ content.headline }}
    </h2>
    <p class="textblock__text" v-html="content.text" />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.textblock {
  &__text {
    line-height: 24px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.5;
    font-family: 'IBM Plex Sans', 'sans-serif' !important;
    word-wrap: break-word;
  }
  &__headline {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 20px;
    word-wrap: break-all;
  }
}
</style>
