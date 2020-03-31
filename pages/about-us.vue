<template>
  <div>
    <v-container class="about-us mt-10 mb-12">
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <p class="about-us__topline">
            {{ topline }}
          </p>
          <h1 class="about-us__title">
            {{ title[0] }}
            <span class="about-us__title--special">{{ title[1] }}</span>
            {{ title[2] }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <div class="about-us__background py-10">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <v-row justify="space-between" class="mb-12">
              <v-col cols="12" md="7">
                <p class="about-us__paragraph">
                  {{ copyTop }}
                </p>
              </v-col>
              <v-col cols="12" md="5" lg="4">
                <v-img :src="require('~/assets/shoutout-ueber-uns-team@2x.png')" class="about-us__team" />
              </v-col>
            </v-row>
            <v-row justify="space-between" align="center">
              <v-col cols="12" md="7" order-md="3">
                <v-img :src="line" class="mb-10" />
                <p class="about-us__paragraph">
                  {{ copyBottom }}
                </p>
              </v-col>
              <v-col cols="12" sm="8" md="4" order-md="1">
                <div>
                  <carousel :per-page="1" :pagination-enabled="false" :autoplay="true" :autoplay-timeout="3000">
                    <slide
                      v-for="(img, i) in members"
                      :key="i"
                    >
                      <img :src="img.src" :alt="img.alt" class="about-us__slider-image">
                    </slide>
                  </carousel>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topline: 'Moin Moin, Grüß Gott und Hallo.',
      title: ['An dieser Stelle ein kleines ', 'Shoutout ', 'an uns selbst.'],
      line: require('~/assets/strich-unter-bild2.png'),
      copyTop: 'Denn dass diese Plattform so existiert, wie sie es gerade tut, hätten wir selber nie gedacht. Aber dann kam der #WirVsVirus Hackathon der Bundesregierung und plötzlich ging alles ganz schnell. 48 Stunden, viele Baustellen und ein Ziel, etwas zu der Corona-Krise beitragen – mitwirken und Lösungen finden. Shoutout ist unser Beitrag zu dieser seltsamen Zeit.',
      copyBottom: 'Von insgesamt 10 Köpfen entwickelt, 10 Arbeitskollegen, 10 Freiwillige. Wir sind ein bunter Haufen aus Designern, Programmierern, Textern und Konzeptern und wollen den kleinen Läden in Deutschlands Vierteln eine Stimme geben. Nicht nur in der Krise, sondern auch danach. Dafür stecken wir schon jetzt unsere 10 Köpfe zusammen und planen den Ausbau dieser Plattform. Also stay tuend und supporte dein Viertel mit Shoutout.',
      members: [
        {
          src: require('@/assets/ueber-uns-dominik-shoutout.png'),
          alt: 'Dominik'
        },
        {
          src: require('@/assets/ueber-uns-olga-shoutout.png'),
          alt: 'Olga'
        },
        {
          src: require('@/assets/ueber-uns-micha-shoutout.png'),
          alt: 'Michael'
        },
        {
          src: require('@/assets/ueber-uns-jessi-shoutout.png'),
          alt: 'Jessi'
        },
        {
          src: require('@/assets/ueber-uns-henry-shoutout.png'),
          alt: 'Henry'
        },
        {
          src: require('@/assets/ueber-uns-tabea-shoutout.png'),
          alt: 'Tabea'
        },
        {
          src: require('@/assets/ueber-uns-leo-shoutout.png'),
          alt: 'Leo'
        },
        {
          src: require('@/assets/ueber-uns-lena-shoutout.png'),
          alt: 'Lena'
        },
        {
          src: require('@/assets/ueber-uns-johannes-shoutout.png'),
          alt: 'Johannes'
        },
        {
          src: require('@/assets/ueber-uns-maria-shoutout.png'),
          alt: 'Maria'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.about-us {

  &__topline {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.4rem;

    @media (min-width: 960px) {
      font-size: 1rem;
    }
  }

  &__carousel-item {
    height: auto;
    width: 100%;
  }

  &__title {
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 1.15;

    @media (min-width: 960px) {
      font-size: 4.3rem;
    }

    &--special {
      font-family: 'theRambler';
      font-size: 4rem;
      line-height: 0;

      @media (min-width: 960px) {
        font-size: 7.5rem;
        line-height: 0;
      }
    }
  }

  &__team {
    @media (min-width: 960px) {
      margin-top: -25%;
      transform: scale(1.3) translateX(13%);
    }
  }

  &__paragraph {
    font-size: 1.4rem;
    line-height: 1.6;
  }

  &__background {
    background-color: #eeede8;
  }

  &__slider-image {
    width: 100%;
  }
}
</style>
