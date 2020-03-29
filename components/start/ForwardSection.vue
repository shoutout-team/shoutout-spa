<template>
  <v-container>
    <v-row justify="center" class="mb-0">
      <v-col cols="12" xl="10" class="mb-9">
        <h2>
          {{ headline }}
        </h2>
        <p>
          {{ subline }}
        </p>
      </v-col>
      <v-col cols="12" sm="6" xl="5" class="pb-0">
        <v-img
          :alt="img.alt"
          :src="require('~/assets/rette-dein-viertel-shoutout__start.png')"
        />
      </v-col>
      <v-col cols="12" sm="6" xl="5" class="pb-0">
        <p>
          {{ desc }}
        </p>
        <v-btn outlined depressed tile nuxt to="/select">
          Jetzt unterstützen
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-img :src="require('@/assets/strich-unter-bild.png')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headline: 'Für Vierteilfreunde und Viertelhelden',
      subline: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und ',
      desc: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden',
      img: {
        alt: 'fuer viertel freunde',
        src: require('~/assets/shoutout-splitscreen-2.jpg')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.img__wrapper {
  position: relative
}
.img {
  &-outside {
    position: relative;
  }

  &-inner {
    text-transform: capitalize;
    position: absolute;
    top: -15px;
    right: -15px;
    transition: transform 200ms ease;

    &-text {
      font-family: theRambler;
      text-align: center;
      font-size: 60px;
    }
  }
}
</style>
