<template>
  <div class="faq">
    <v-container>
      <v-row justify="start">
        <v-col cols="12">
          <h2 class="faq__title">{{ title }}</h2>
        </v-col>
      </v-row>
      <v-row class="mb-12">
        <v-col cols="12" sm="4" lg="3">
          <p class="faq__headline">{{ headlineSupporter }}</p>
          <v-img class="faq__image" :src="require('~/assets/faq-strich-helfer.png')" width="80%" />
        </v-col>
        <v-col cols="12" sm="8" lg="8">
          <Accordion
            v-for="(item, i) in faqsSupporter"
            :key="i"
            :title="item.title"
            :body="item.body"
          />
        </v-col>
      </v-row>
      <v-row class="mb-12">
        <v-col cols="12" sm="4" lg="3">
          <p class="faq__headline">{{ headlineCompanys }}</p>
          <v-img class="faq__image" :src="require('~/assets/faq-strich-unternehmen.png')" width="80%" />
        </v-col>
        <v-col cols="12" sm="8" lg="8">
          <Accordion
            v-for="(item, i) in faqsSupporter"
            :key="i"
            :title="item.title"
            :body="item.body"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Accordion from '~/components/start/accordion'
export default {
  components: { Accordion },
  data () {
    return {
      title: 'Ihr fragt, wir antworten',
      headlineSupporter: 'Für Unterstützer',
      headlineCompanys: 'Für Ladenbesitzer/-innen',
      faqsCompanys: [
        {
          title: 'Was ist shoutout?',
          body: 'Shoutout ist eine Plattform, die kleine Unternehmen und Unterstützer zusammen bringen will, damit die Vielfalt in Deutschlands Viertel auch nach der Krise erhalten bleibt. Mit kleinen Unternehmen meinen wir all die Läden in unseren Vierteln, die aktuell Hilfe brauchen, weil sie aufgrund der Corona-Krise kein Einkommen mehr haben und nicht Teil einer Franchise-Kette oder eines Konzerns sind.'
        },
        {
          title: 'Was muss ich tun, um mich hier zu registrieren?',
          body: 'Fülle unser Registrierungsforumlar vollständig aus. Hier fragen wir einige Kerndaten zu deinem Unternehmen ab (u. a. E-Mail-Adresse, Adresse, Handelsregister-Nr.) und geben dir die Möglichkeit etwas zu deiner aktuellen Situation zu schreiben. Das hilft Unterstützern zu erfahren, wie sie dir am besten helfen können. Z. B. könntest du hier mitteilen, dass du Hilfe beim Aufbau eines Onlineshops brauchst, du ein Gutscheinsystem oder Lieferservice anbietest oder aber, dass du einen Ausverkauf von Vorräten starten möchtest. Ganz egal was, Shoutout ist deine Möglichkeit dein Unternehmen laut zu machen. '
        },
        {
          title: 'Wie lange wird es Shoutout geben?',
          body: 'Das hängt natürlich davon ab, wie aktiv Shoutout genutzt wird. Wir glauben fest daran, dass diese Art der Plattform auch nach der Krise noch einen wertvollen Beitrag zur Viertelkultur erbringen kann – ein paar Ideen dafür hätten wir schon.'
        },
        {
          title: 'Kostet mich eine Registrierung etwas?',
          body: 'Nein, Shoutout ist absolut kostenfrei und an keine Gebühren oder Verpflichtungen gebunden. Entstehende Kosten zahlen wir aktuell aus eigener Tasche. Uns geht es darum, Menschen mit unserer Expertise zu helfen und Deutschlands Viertel digital zu vernetzen.'
        },
        {
          title: 'Wie kann ich meinen Kunden von Shoutout erzählen?',
          body: 'Am besten, in dem du von uns erzählst. Du könntest uns z. B. auf deiner Seite verlinken uns auf Instagram oder Facebook folgen oder auch einen ein Aushang im Schaufenster machen. '
        },
        {
          title: '',
          body: ''
        },
        {
          title: '',
          body: ''
        },
        {
          title: '',
          body: ''
        },
        {
          title: '',
          body: ''
        },
        {
          title: '',
          body: ''
        }
      ],
      faqsSupporter: [
        {
          title: 'Was ist Shoutout?',
          body: 'Shoutout ist eine Plattform, die kleine Unternehmen und Unterstützer zusammenbringt, damit die Vielfalt in Deutschlands Viertel auch nach dem Virus erhalten bleibt. Mit kleinen Unternehmen meinen wir all die Läden in unseren Vierteln, die aktuell Hilfe brauchen, weil sie aufgrund der Corona-Krise kein Einkommen mehr haben und nicht Teil einer Franchise-Kette oder eines Konzerns sind.'
        },
        {
          title: 'Wie kann ich unterstützen?',
          body: 'Das kannst du auf der Profilseite eines Ladens nachlesen. Wir wollen jedem Unternehmen die Chance geben, selber mitzuteilen, welche Unterstützung gerade am meisten hilft. Vielleicht bietet dein Lieblingsladen einen Liefererservice an, von dem du noch nichts wusstest, sucht Menschen, die beim Ausliefern der Ware helfen, bietet Gutscheine an, oder freut sich einfach nur über eine Spende. Nimm dir ne’ Minute und lies dir Ihre Profilbeschreibung durch und entscheide dann selber, wie du helfen möchtest.'
        },
        {
          title: 'Gibt es einen Mindestbetrag für Spenden?',
          body: 'Nein, wir glauben, dass jeder Cent hilft und möchten daher die Barriere so niedrig wie möglich halten. Deshalb bieten wir dir auch drei Wege an, wie du dem Unternehmen eine Spende zukommen lassen kannst (natürlich nur, wenn das Unternehmen die Spendenfunktion freigeschaltet hat).'
        },
        {
          title: 'Bekomme ich eine Spendenbescheinigung?',
          body: 'Nein.'
        },
        {
          title: 'An meinem Standort sind keine/nur wenige Läden gelistet. Wie kann ich das ändern?',
          body: 'Am besten erzählst du den Läden, die dir am Herzen liegen, von unserer Plattform und schickst dem/der Inhaber/in unseren Link, damit sie sich registrieren können.'
        },
        {
          title: 'Geht meine Spende komplett an meinen Lieblingsladen?',
          body: 'Ja, egal für welchen Spenden-Weg du dich entscheidest, das Geld geht zu 100 % an den Laden. Shoutout verlangt zu keinem Zeitpunkt eine Gebühr oder o. Ä. Uns geht es nur darum, die Vielfalt in unseren Vierteln zu bewahren und kleine Läden zu unterstützen.'
        },
        {
          title: 'Bekomme ich mein Geld zurück, wenn mein Lieblingsladen schließen muss?',
          body: 'Nein, denn eine Spende sollte immer als eine freiwillige Leistung verstanden werden, die ohne Gegenleistung gegeben wird.'
        },
        {
          title: 'Wer steckt hinter Shoutout?',
          body: 'Ein 10-köpfiges Team, aus Designern, Programmieren, Konzeptern und Textern, dass sich von der Arbeit kennt und mit Shoutout einen Beitrag zu dieser seltsamen Zeit leisten möchte.'
        },
        {
          title: 'Wie ist shoutout entstanden?',
          body: 'Im Rahmen des Hackathons #WirVsVirus, welcher von der Bundesregierung ausgerichtet wurde, haben wir unsere Köpfe zusammen gesteckt und versucht, unsere Expertise zu bündeln, um dem Virus etwas entgegenzustellen. Ganz nach dem Motto „Stay home. But stay loud.” ist uns dann die Idee zu dieser Plattform gekommen, die wir innerhalb von 48 Stunden aus dem Boden gestampft haben.'
        },
        {
          title: 'Wie kann ich Shoutout unterstützen?',
          body: 'Am besten, in dem du uns bei Instagram folgst, unsere Seite teilst und kleinen Läden von dieser Plattform erzählst. Wenn du darüberhinaus noch Anregungen hast, wie wir die Plattform verbessern können oder du Ideen für weitere Features hast, kannst du uns diese gerne in einer Mail zukommen lassen: hallo@shoutout.jetzt.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.faq {
  background-color: #eeede9;

  &__title {
    font-family: "IBM Plex Sans", "sans-serif";
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 1.3;
    margin-top: -60px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      font-size: 3.4rem;
    }
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
