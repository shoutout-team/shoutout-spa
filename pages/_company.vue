<template>
  <v-container v-if="company" fluid>
    <v-row justify="space-around" class="mb-10">
      <v-col cols="12">
        <v-img src="https://picsum.photos/1300/300" min-height="200" />
      </v-col>
    </v-row>
    <v-dialog v-model="showPayment" content-class="company-dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <Donation :payments="company.properties.payment" @close="showPayment = false" />
    </v-dialog>
    <v-row justify="space-around">
      <v-col
        cols="12"
        sm="8"
        md="6"
        offset-md="2"
      >
        <h1 class="display-1 mb-1 font-weight-black">
          {{ company.title }}
        </h1>

        <p>{{ company.city }}, {{ company.street }} {{ company.street_number }}</p>
        <div class="mb-10">
          <a
            v-for="(link, index) in company.properties.links"
            :key="index"
            :href="link"
          >
            <img v-if="index !== 'website'" :src="`/${index}.png`" class="mr-5 socialmedia">
          </a>
        </div>
        <p class="title">
          {{ company.properties.description }}
        </p>
        <v-row>
          <v-col class="d-flex align-center mb-5">
            <v-avatar size="90" class="mr-5">
              <v-img alt="profile photo" :src="require('~/assets/shoutout-user-profilbild.png')" />
            </v-avatar>
            <v-row>
              <v-col>
                <h2 class="title">{{ company.keeper__name }}</h2>
                <p class="body-2">Inhaber</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-btn nuxt to="/overview">
          Zurück
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        offset-md="1"
        md="3"
      >
        <v-btn color="#000" dark large class="pl-10 pr-10 mb-12" @click="showPayment = true">
          Jetzt spenden
        </v-btn>
        <h3 class="title mb-2">
          Diese Seite teilen
        </h3>
        <a :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img src="/facebook.png" alt="facebook" class="share mr-8">
        </a>
        <a :href="`https://twitter.com/intent/tweet?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img src="/twitter.png" alt="twitter" class="share mr-8">
        </a>
        <a :href="`https://wa.me/?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
          <img src="/whatsapp.png" alt="whatsapp" class="share">
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Donation from '~/components/Donation'
import endpoints from '~/store/utils/endpoints.js'

export default {
  async validate ({ params, store }) {
    let { companies } = store.state
    if (companies.length === 0) {
      companies = await this.$axios.$get(endpoints.GET_COMPANIES_ENDPOINT)
    }
    return companies.find(el => el.slug === params.company)
  },
  components: {
    Donation
  },
  data () {
    return {
      showPayment: false
    }
  },
  computed: {
    company () {
      return this.$store.state.companies.find(el => el.slug === this.$route.params.company)
    }
  }
}
</script>
<style>
.socialmedia {
  height: 14px;
}

.share {
  height: 25px;
}
.company-dialog {
  display: flex;
  background-color: rgba(255, 255, 255, 0.95);
}
</style>
