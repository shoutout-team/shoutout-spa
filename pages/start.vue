<template>
  <v-container>
    <forward-section />
    <wall>
      <card
        v-for="(card, key) in cards"
        :key="key"
        :content="card"
      />
    </wall>
    <wall>
      <social-card
        v-for="(card, key) in socialCards"
        :key="key"
        :content="card"
      />
    </wall>
    <Faq />
  </v-container>
</template>

<script>
import ForwardSection from '@/components/start/ForwardSection.vue'
import Wall from '@/components/start/Wall.vue'
import Card from '@/components/start/card.vue'
import SocialCard from '@/components/start/SocialCard.vue'
import Faq from '@/components/start/faq.vue'

export default {
  name: 'Start',
  components: {
    Wall,
    Card,
    SocialCard,
    ForwardSection,
    Faq
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
          number: 2
        },
        {
          introductionStep: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden',
          headline: 'Registrieren',
          number: 3
        },
        {
          introductionStep: 'dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden dummy dummy dummy Für Vierteilfreunde und Viertelhelden',
          headline: 'Registrieren',
          number: 4
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
