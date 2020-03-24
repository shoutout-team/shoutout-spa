<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-carousel
          show-arrows
          hide-delimiter-background
          hide-delimiters
          dark
          height="none"
          progress
          progress-color="#1E88E5"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-img :src="item.src" :alt="item.alt" />
            <div class="pb-12">
              <h2 class="ma-4">
                {{ item.header }}
              </h2>
              <blockquote class="text-left ma-4">
                {{ item.text }}
              </blockquote>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" class="text-right">
        <div class="button">
          <v-btn
            exact
            nuxt
            depressed
            outlined
            color="indigo"
            large
            to="/splitscreen"
          >
            Los geht's
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      items: [
        {
          alt: 'Jetzt ma’ Tacheles',
          src: require('~/assets/shoutout-slider-1.jpg'),
          header: 'Jetzt ma’ Tacheles',
          text: 'Jeder hat Sie, jeder kennt sie, jeder liebt sie – die kleinen Läden, die das Viertel besonders machen. Das Café um’s Eck, die Kneipe nebenan oder der Buchladen ne Straße weiter.'
        },
        {
          alt: 'Ohne Moos, nix los',
          src: require('~/assets/shoutout-slider-2.jpg'),
          header: 'Ohne Moos, nix los',
          text: 'Diese Läden sind auf Kundschaft angewiesen und müssen in Krisenzeiten besonders hart kämpfen. Deswegen brauchen sie ein Shoutout, eine Plattform, die ihnen eine Stimme gibt.'
        },
        {
          alt: 'Nimm dir ’ne Minute',
          src: require('~/assets/shoutout-slider-3.jpg'),
          header: 'Nimm dir ’ne Minute',
          text: 'Unterstütze was dir lieb ist oder sag ganz offen, was dir am liebsten wäre. Shoutout ist für alle, für Nachbarn und Unternehmer, für Unterstützer und Arbeitgeber. Shoutout ist für dein Viertel.'
        }
      ]
    }
  },
  mounted () {
    this.fetchCompanies()
  },
  methods: {
    async fetchCompanies () {
      try {
        const companies = await fetch('https://savethekiez.herokuapp.com/api/v1/companies.json')
        const parsedCompanies = await companies.json()
        this.$store.dispatch('setCompanies', parsedCompanies)
      } catch {}
    }
  }
}
</script>
