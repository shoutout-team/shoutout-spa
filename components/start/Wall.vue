<template>
  <v-container class="wall__wrapper">
    <h2 class="wall__title mb-8 mb-md-10">{{ title }}</h2>
    <div class="wall">
      <slot />
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>

<style lang="scss" scoped>
.wall {
  display: flex;
  flex-wrap: unset;
  width: 100%;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__wrapper {
    overflow-x: scroll;
  }

  &__title {
    font-family: "IBM Plex Sans", "sans-serif";
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 1.3;

    @media (min-width: 768px) {
      font-size: 3.4rem;
    }
  }
}
</style>
