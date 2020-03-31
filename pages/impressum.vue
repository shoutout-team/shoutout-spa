<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <h1 class="impressum__headline">Impressum</h1>
          <text-block v-for="(block, key) in contact" :key="key" :content="block" />
        </v-col>
      </v-row>
    </v-container>
    <div class="wrapper pb-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <text-block v-for="(block, key) in moreInfos" :key="key" :content="block" />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <a target="_blank" href="https://datenschutz-generator.de/?l=de" class="font-weight-bold">
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
            </a>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import TextBlock from '@/components/textBlock.vue'

export default {
  components: {
    TextBlock
  },
  data () {
    return {
      contact: [
        {
          headline: 'Diensteanbieter',
          text: 'shoutout.jetzt GbR<br>Dominik Criado<br>Rankestraße 10<br>50935 Köln'
        },
        {
          headline: 'Kontaktmöglichkeiten',
          text: 'E-Mail-Adresse: hallo@shoutout.jetzt<br>Telefon: 00491703190894'
        }
      ],
      moreInfos: [
        {
          headline: 'Vertretungsberechtigte',
          text: '<span class="font-weight-bold">Vertretungsberechtigt:</span> Dominik Criado (Konzept), Tabea Sabolowitsch (Text), Jessica Willius (Design & Social Media), Olga Liamina (Design), Johannes Zimmer (Design), Lena Overkamp (Design), Leo Reuter (Frontend), Michael Ajwani (Backend), Henry Steinhauer (Frontend), Maria Friedländer (Projektmanagement)'
        },
        {
          headline: 'Social Media und andere Onlinepräsenzen',
          text: 'Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:<br><a target="_blank" href="https://www.instagram.com/shoutout.jetzt/">https://www.instagram.com/shoutout.jetzt/</a>'
        },
        {
          headline: 'Haftungs- und Urheberrechtshinweise',
          text: '<span class="font-weight-bold">Haftungsausschluss:</span> Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und unverbindlich.'
        },
        {
          text: '<span class="font-weight-bold">Links auf fremde Webseiten:</span> Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen, liegen außerhalb unseres Verantwortungsbereiches und machen wir uns nicht zu Eigen. Für alle Inhalte und insbesondere für Schäden, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen entstehen, haftet allein der Anbieter der verlinkten Webseiten.'
        },
        {
          text: '<span class="font-weight-bold">Urheberrechte und Markenrechte:</span> Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteverwalter. Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich entfernen.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #eeede8;
}

.impressum {
  &__headline {
    font-family: 'theRambler';
    font-size: 120px;
  }
}
</style>
