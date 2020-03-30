<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <h2 class="wall__title">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="wall__wrapper">
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <div class="wall">
            <slot />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
