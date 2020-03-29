<template>
  <v-container class="wall__wrapper">
    <div class="wall">
      <div
        v-for="(cart, key) in content"
        :key="key"
      >
        <slot :content="cart" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.wall__wrapper {
  overflow: scroll;
}
.wall {
  display: flex;
  flex-wrap: unset;
  width: 100%;
}
</style>
