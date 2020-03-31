<template>
  <div class="start-stage mb-10">
    <v-container class="start-stage__container">
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="end">
            <v-col
              class="start-stage__image-col"
              cols="12"
              sm="8"
              md="6"
              xl="6"
              order-md="2"
            >
              <v-img :src="imageLine" class="start-stage__line" />
              <v-img :src="image" />
            </v-col>
            <v-col cols="12" md="6" xl="5" order-md="1">
              <h2 class="start-stage__title mt-3 mt-md-8 mb-3 mb-10">{{ title }}</h2>
              <p class="start-stage__paragraph mb-8 pr-md-10">{{ paragraph }}</p>
              <v-btn
                color="#000"
                dark
                nuxt
                depressed
                tile
                to="/signup"
                class="pa-5 px-lg-8 py-lg-7 mb-md-8"
              >
                {{ cta }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageLine: require('~/assets/strich-unter-bild2.png'),
      title: 'Rette deinen Laden',
      paragraph: 'Du bist Zapfmeister, Cafébetreiber, Schnittschwester oder Meisterkoch? Lass es dein Viertel wissen. Registriere dein Unternehmen und nutze die Plattform für ein Shoutout – für Unterstützung, für Ideen, für Aufmerksamkeit.',
      cta: 'Jetzt registierien',
      image: require('~/assets/shoutout-stage.png')
    }
  }
}
</script>

<style scoped lang="scss">
.start-stage {
  position: relative;
  background-color: #eeede9;

  @media (min-width: 1980px) {
    background-color: transparent;
  }

  &__container {
    background-color: #eeede9;
  }

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

  &__line {
    position: absolute;
    width: 80%;
    bottom: 10px;
    left: 20%;
    z-index: 2;

    @media (min-width: 960px) {
      top: 20px;
      left: 0;
      bottom: auto;
    }
  }

  &__paragraph {
    max-width: 500px;
  }

  &__image-col {
    padding: 0;
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
