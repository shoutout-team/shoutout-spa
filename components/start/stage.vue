<template>
  <v-container class="start-stage">
    <v-row justify="center">
      <v-col cols="12">
        <v-container>
          <v-row justify="end">
            <v-col cols="12" md="5" order-md="2">
              <v-img :src="image" />
            </v-col>
            <v-col cols="12" md="7" xl="6" order-md="1">
              <h2 class="start-stage__title mt-3 mt-md-8 mb-3 mb-8">{{ title }}</h2>
              <p class="start-stage__paragraph mb-8">{{ paragraph }}</p>
              <v-btn
                color="#000"
                dark
                nuxt
                to="/signup"
                class="pa-5 px-lg-8 py-lg-7"
              >
                {{ cta }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'Rette deinen Laden',
      paragraph: 'Du bist Bücherwurm, Bohnengourmet oder Hopfenkönig? Dann supporte jetzt dein Viertel. Suche deine Lieblingsläden und unterstütze was dir am Herzen liegt – mit Spenden, mit Einfällen oder Reichweite.',
      cta: 'Jetzt registierien',
      image: require('~/assets/rette-dein-viertel-shoutout__start.png')
    }
  }
}
</script>

<style scoped lang="scss">
.start-stage {
  background-color: #eeede9;

  &__title {
    font-family: "IBM Plex Sans", "sans-serif";
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.3;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1200px) {
      font-size: 3.4rem;
    }
  }

  &__paragraph {

  }

  &__image {
    margin-top: -15px;
  }

  &__headline {
    font-family: "IBM Plex Sans", "sans-serif";
    font-weight: 300;
    font-size: 1.6rem;
  }
}
</style>
