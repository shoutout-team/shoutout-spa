<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="10">
        <v-img max-height="300px" :alt="img.alt" :src="img.src" />
        <h2 class="mt-3">{{ headline }}</h2>
        <p class="mt-3">{{ subline }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headline: 'Platzhalter',
      subline: 'Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text',
      img: {
        alt: 'demo',
        src: require('@/assets/shoutout-profilbild-platzhalter.jpg')
      }
    }
  }
}
</script>
