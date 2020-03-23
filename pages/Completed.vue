<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm10
      md8
      justify-center
      flex-column
      class="container"
    >
      <v-avatar size="126" class="avatar pa-12 mb-12 mx-auto">
        <v-icon color="teal">{{ mdiCheck }}</v-icon>
      </v-avatar>
      <p class="content display-1 ma-6">
        Danke!<br>
        Deine Spende <nobr>ist angekommen.</nobr>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiCheck } from '@mdi/js'

export default {
  data () {
    return {
      mdiCheck
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  max-width: 550px;

  .avatar {
    border: 1px solid teal;
  }
  .content {
    color: teal;
    max-width: 500px;
  }
}
</style>
