<template>
  <v-container class="wall__wrapper">
    <div class="wall">
      <div>
        <slot />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
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
