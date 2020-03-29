<template>
  <div>
    <v-container>
      <forward-section class="mb-10" />
      <wall :title="instructionTitle" class="mb-12">
        <card
          v-for="(card, key) in cards"
          :key="key"
          :content="card"
        />
      </wall>
    </v-container>
    <Faq class="mb-10" />
    <v-container>
      <wall :title="socialTitle">
        <social-card
          v-for="(card, key) in socialCards"
          :key="key"
          :content="card"
        />
      </wall>
    </v-container>
  </div>
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
      instructionTitle: 'So funktioniert’s',
      socialTitle: 'Wir bei Instagram',
      cards: [
        {
          introductionStep: 'Um bei uns als Unternehmen gelistet zu werden musst du dich registrieren. Das ist super einfach und absolut kostenlos. Wir brauchen nur ein paar Kerndaten von dir und eine kurze Beschreibung, wie dir dein Viertel am besten helfen kann.',
          headline: 'Registrieren',
          number: 1
        },
        {
          introductionStep: 'Mithilfe unserer Suchfunktion findest du deine Lieblingsläden in Nu. Teile mit uns deinen Standort oder gib die Postleitzahl des Viertels ein. Anschließend werden dir alle aktuell bei uns gelisteten Läden angezeigt.',
          headline: 'Suchen',
          number: 2
        },
        {
          introductionStep: 'Hast du dein Lieblingslokal gefunden, wählst du es aus und erfährst über die  Profilseite wie du es am besten unterstützen kannst. So bekommt jedes Unternehmen die Hilfe, die es wirklich braucht.',
          headline: 'Helfen',
          number: 3
        },
        {
          introductionStep: 'Du findest Shoutout ist ne gute Sache? Dann sag es der Welt. Erzähl andern Läden von uns. Teile unsere Seite auf deinen Social Media Kanälen, schreib nen Song oder mal ein Bild. Ganz egal wie, hilf uns Deutschlands Viertel zu vernetze.',
          headline: 'Weitersagen',
          number: 4
        }
      ],
      socialCards: [
        {
          headline: 'Platzhalter',
          subline: 'Stell dir vor: In einigen Monaten fahren wir den ganzen Laden wieder hoch. Nur eine Sache fehlt plötzlich. Dein Friseur, der dir immer den coolen Undercut geschnitten, dein Lieblings-Döner für Samstagnacht, das süße Café mit dem langsamen WLAN... Alle weg, dein Viertel nicht mehr dasselbe. Lasst uns etwas dagegen machen, lasst uns dem Virus etwas entgegenstellen. Stay home, but stay loud.',
          img: {
            alt: 'Instragram 1',
            src: require('@/assets/shoutout-instagram-1.jpg')
          }
        },
        {
          headline: 'Platzhalter',
          subline: 'Liebe Betreiber von kleinen Läden: We hear you! Und wir möchten euch nicht missen. Ihr macht unser Viertel zu dem, was es ist. Deswegen möchten wir euch eine Plattform für einen kräftigen Shoutout an alle willigen Unterstützer bieten. Stay home, but stay loud.',
          img: {
            alt: 'Instagram 2',
            src: require('@/assets/shoutout-instagram-2.jpg')
          }
        },
        {
          headline: 'Platzhalter',
          subline: 'Es ist Zeit für einen 🗣Shoutout, damit dein Viertel auch nach dem Virus bunt und lebendig bleibt! Wir bieten kleinen Läden in deinem Viertel eine Plattform. Eine Stimme, damit ihre Probleme gehört werden. Auf einer übersichtlichen Karte findest du deine Eisdiele ums Eck oder den Buchhandel deines Vertrauens und kannst sie sinnvoll unterstützen. Setzen wir dem Virus gemeinsam etwas entgegen. Stay home, but stay loud.',
          img: {
            alt: 'Instagram 3',
            src: require('@/assets/shoutout-instagram-3.jpg')
          }
        },
        {
          headline: 'Platzhalter',
          subline: 'Shoutout! Jetzt! Unser Interview bei WDR COSMO: Dominik – unser Denker & Schreiber und nun auch unser Sprecher 💬 – hat ein Interview bei #wdrcosmo  gegeben. Hört gerne mal rein.',
          img: {
            alt: 'Instagram 4',
            src: require('@/assets/shoutout-instagram-4.jpg')
          }
        }
      ]
    }
  }
}
</script>
