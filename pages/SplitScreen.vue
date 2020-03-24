<template>
  <v-container>
    <v-row justify="space-between">
      <v-col
        v-for="(field, key) in selectionFields"
        :key="key"
        cols="12"
        sm="6"
        md="5"
      >
        <selection-card :selection-type="field" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SelectionCard from '~/components/SelectionCard'

export default {
  components: {
    SelectionCard
  },
  data () {
    return {
      selectionFields: [
        {
          headline: 'Für Viertel Freunde',
          desc: 'Du bist Bücherwurm, Bohnengourmet oder Hopfenkönig? Dann supporte jetzt dein Viertel. Suche deine Lieblingsläden und unterstütze, was dir am Herzen liegt. Mit Spenden, mit Einfällen oder Reichweite.',
          btn: {
            to: '/overview',
            text: 'Local finden'
          },
          img: {
            alt: 'Für Viertelfreunde',
            src: require('~/assets/shoutout-splitscreen-1.jpg')
          }
        },
        {
          headline: 'Für Viertelhelden',
          desc: 'Du bist Zapfmeister, Cafébetreiber, Schnittschwester oder Meisterkoch? Lass es dein Viertel wissen. Registrier dein Unternehmen und nutze die Plattform für ein Shoutout – für Unterstützung, für Ideen, für Aufmerksamkeit.',
          btn: {
            to: '/overview',
            text: 'Registrieren'
          },
          img: {
            alt: 'fuer viertel freunde',
            src: require('~/assets/shoutout-splitscreen-2.jpg')
          }
        }
      ]
    }
  }
}
</script>
