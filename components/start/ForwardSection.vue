<template class="forward">
  <v-container>
    <v-row justify="center" class="mb-0">
      <v-col cols="12" xl="10" class="mb-9">
        <h2 class="forward__headline mb-4">
          {{ headline }}
        </h2>
        <p class="forward__subtitle">
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
        <p class="mb-8">
          {{ desc }}
        </p>
        <v-btn
          outlined
          depressed
          tile
          nuxt
          to="/overview"
          class="pa-7"
        >
          Jetzt supporten
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
      headline: 'Für Viertelfreunde und Viertelhelden',
      subline: 'Shoutout ist die Plattform, die kleine Läden und Unterstützer zusammenbringt. Registriere dein Unternehmen oder supporte deinen Lieblingsladen.',
      desc: 'Du bist Bücherwurm, Bohnengourmet oder Hopfenkönig? Dann supporte jetzt dein Viertel. Suche deine Lieblingsläden und unterstütze was dir am Herzen liegt. Mit Spenden, mit Einfällen oder Reichweite.',
      img: {
        alt: 'fuer viertel freunde',
        src: require('~/assets/shoutout-splitscreen-2.jpg')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.forward {
  &__headline {
    font-family: "IBM Plex Sans", "sans-serif";
    font-weight: 700;
    font-size: 2rem;
  }

  &__subtitle {
    font-family: "IBM Plex Sans", "sans-serif";
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5;
  }
}
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
