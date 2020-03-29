<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xl="10">
        <v-carousel class="img" hide-delimiters interval="6000" cycle>
          <v-carousel-item
            v-for="(member,i) in members"
            :key="i"
            :src="member.src"
            :alt="member.alt"
            class="img-outside"
          >
            <v-img class="ml-auto img-inner" width="40%" alt="tape" :src="require('@/assets/shoutout-tape.png')">
              <p class="img-inner-text">
                {{ member.alt }}
              </p>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" xl="10">
        <h1 class="mb-4">Über uns</h1>
        <p>
          Moin moin, grüß Gott und hallo. An dieser Stelle ein kleines Shoutout an uns selbst.
        </p>
        <p>
          Denn das diese Plattform so existiert, wie sie es gerade tut, hätten wir selber nie gedacht.
          Aber dann kam der #wirvsvirus Hackathon der Bundesregierung und plötzlich ging alles ganz schnell.
        </p>
        <p>
          48 Stunden, viele Baustellen und ein Ziel, etwas zu der Corona-Krise beitragen – mitwirken und Lösungen finden. Shoutout ist unser Beitrag zu dieser seltsamen Zeit. Von 10 Köpfen entwickelt, 10 Arbeitskollegen, 10 Freiwillige.
        </p>
        <p>
          Wir sind ein bunter Haufen aus Designern, Programmierern, Textern und Konzeptern und wollen den kleinen Läden in Deutschlands Vierteln eine Stimme geben. Nicht nur in der Krise, sondern auch danach. Dafür stecken wir schon jetzt unsere 10 Köpfe zusammen und planen den Ausbau dieser Plattform. Also stay tuend und supporte dein Viertel mit Shoutout.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      members: [
        {
          src: require('@/assets/member/leo.jpg'),
          alt: 'leo'
        },
        {
          src: require('@/assets/member/henry.jpg'),
          alt: 'henry'
        },
        {
          src: require('@/assets/member/olga.jpg'),
          alt: 'olga'
        },
        {
          src: require('@/assets/member/dominik.jpg'),
          alt: 'dominik'
        },
        {
          src: require('@/assets/member/johannes.jpg'),
          alt: 'johannes'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.img {
  position: relative;
}

.img-outside {
  position: relative;
}

.img-inner {
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
</style>
