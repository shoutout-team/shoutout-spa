<template>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel
          v-model="carouselIndex"
          light
          hide-delimiters
        >
          <v-carousel-item
            v-for="(image,i) in images"
            :key="i"
            :src="image.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          />
        </v-carousel>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-icon
              v-for="(dot, key) in images.length"
              :key="key"
              size="12"
              class="mx-1"
              :color="dot-1 === carouselIndex ? '#000000' : '#BCBCBC'"
            >{{ mdiCheckboxBlankCircle }}</v-icon>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>{{ company.name }}</h1>
        <h2 class="body-2 font-weight-thin mt-2">{{ company.city }}, {{ company.street }} {{ company.hnr }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <a v-if="social.facebook" :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img class="mr-3" height="25" src="/facebook.png" alt="facebook">
        </a>
        <a v-if="social.twitter" :href="`https://twitter.com/intent/tweet?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img class="mr-3" height="25" src="/twitter.png" alt="twitter">
        </a>
        <a v-if="social.whatsapp" :href="`https://wa.me/?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img height="25" src="/whatsapp.png" alt="whatsapp">
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p v-text="content" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex align-center mb-5">
        <v-avatar size="90" class="mr-5">
          <v-img :alt="profilPhoto.alt" :src="require('~/assets/shoutout-user-profilbild.png')" />
        </v-avatar>
        <v-row>
          <v-col>
            <h2 class="title">{{ company.owner }}</h2>
            <p class="body-2">Inhaber</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" xl="10">
        <v-img alt="shoutout tape" max-width="300px" :src="require('~/assets/shoutout-tape.png')">
          <h1 class="display-1 font-weight-bold pt-3">
            Shoutout auf
          </h1>
        </v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2" lg="1" xl="1">
        <a v-if="social.facebook" :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img class="mr-3" height="27" src="/facebook.png" alt="facebook">
        </a>
      </v-col>
      <v-col cols="2" lg="1" xl="1">
        <a v-if="social.instagram" :href="`https://wa.me/?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img class="mr-3" height="27" src="/instagram.png" alt="instagram">
        </a>
      </v-col>
      <v-col cols="2" lg="1" xl="1">
        <a v-if="social.twitter" :href="`https://twitter.com/intent/tweet?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img class="mr-3" height="27" src="/twitter.png" alt="twitter">
        </a>
      </v-col>
      <v-col cols="2" lg="1" xl="1">
        <a v-if="social.whatsapp" :href="`https://wa.me/?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img height="27" src="/whatsapp.png" alt="whatsapp">
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-9">
        <v-btn text color="#C3AA7D" nuxt to="/info-control" class="px-0 text-capitalize">
          <v-icon class="mr-3" color="#C3AA7D">{{ mdiFileDocumentEditOutline }}</v-icon> Bearbeiten
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCheckboxBlankCircle, mdiFileDocumentEditOutline } from '@mdi/js'

export default {
  data () {
    return {
      mdiCheckboxBlankCircle,
      mdiFileDocumentEditOutline,
      carouselIndex: 0,
      images: [],
      company: {
        name: 'Bohnenkartell',
        owner: 'Max Mustermann',
        city: 'Bonn',
        street: 'Hubertusstraße',
        hnr: '25'
      },
      profilPhoto: {
        alt: 'demo image',
        src: ''
      },
      social: {
        facebook: true,
        twitter: true,
        whatsapp: true,
        instagram: true
      },
      content: `
      Hallo du

      Vielleicht kennen wir uns schon,

      vielleicht auch nicht. Wir freuen uns wie Bolle, dass du unserem kleinen Café einen Shoutout geben willst. Besonders in der aktuellen Situation müssen wir alle umdenken und kreativ werden. Da wir aktuell unsere Pforten geschlossen lassen müssen, sind wir für Support jeder Art dankbar. So kannst du uns helfen: 1. Mit einer kleinen Spende, jeder Cent hilft2. Mit einem Gutscheinkauf, den du nach der Krise einlösen kannst. 3. Mit einem Shoutout über Social Media
          Danke, für deinen Support und bleib gesund!`
    }
  },
  watch: {
    carouselIndex () {
      console.log('input', this.carouselIndex)
    }
  },
  mounted () {
    for (let i = 0; i < 4; i += 1) {
      this.images.push({
        src: 'https://picsum.photos/550/300?random="asdasdas"',
        alt: 'dummy image'
      })
    }
  }
}
</script>
