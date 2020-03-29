<template>
  <v-container>
    <forward-section />
    <wall :content="cards">
      <card />
    </wall>
    <wall :content="socialCards">
      <social-card />
    </wall>
  </v-container>
</template>

<script>
import ForwardSection from '@/components/start/ForwardSection.vue'
import Wall from '@/components/start/Wall.vue'
import Card from '@/components/start/card.vue'
import SocialCard from '@/components/start/SocialCard.vue'

export default {
  name: 'Start',
  components: {
    ForwardSection,
    Wall,
    Card,
    SocialCard
  },
  data () {
    return {
      cards: [
        {
          introductionStep: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden',
          headline: 'Registrieren',
          number: 1
        },
        {
          introductionStep: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden',
          headline: 'Registrieren',
          number: 1
        },
        {
          introductionStep: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden',
          headline: 'Registrieren',
          number: 1
        },
        {
          introductionStep: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden',
          headline: 'Registrieren',
          number: 1
        }
      ],
      socialCards: [
        {
          headline: 'Platzhalter',
          subline: 'Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text',
          img: {
            alt: 'demo',
            src: require('@/assets/shoutout-profilbild-platzhalter.jpg')
          }
        },
        {
          headline: 'Platzhalter',
          subline: 'Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text',
          img: {
            alt: 'demo',
            src: require('@/assets/shoutout-profilbild-platzhalter.jpg')
          }
        },
        {
          headline: 'Platzhalter',
          subline: 'Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text',
          img: {
            alt: 'demo',
            src: require('@/assets/shoutout-profilbild-platzhalter.jpg')
          }
        },
        {
          headline: 'Platzhalter',
          subline: 'Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text Das ist ein Demo Text',
          img: {
            alt: 'demo',
            src: require('@/assets/shoutout-profilbild-platzhalter.jpg')
          }
        }
      ]
    }
  }
}
</script>
