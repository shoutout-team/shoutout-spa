<template>
  <v-container v-if="company" fluid>
    <v-row justify="center" class="mb-10">
      <v-col cols="12" xl="10">
        <div class="img">
          <v-img
            :src="image"
            cover
            height="300px"
            class="img__outside mr-4"
          />
          <v-img class="ml-auto img__inner" max-width="60%" max-height="60%" alt="tape" :src="require('@/assets/shoutout-tape.png')">
            <p class="img__inner-text">
              {{ company.category }}
            </p>
          </v-img>
        </div>
      </v-col>
    </v-row>
    <v-dialog v-model="showPayment" content-class="company-dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <Donation :payments="company.properties.payment" @close="showPayment = false" />
    </v-dialog>
    <v-row justify="center">
      <v-col cols="12" xl="10">
        <v-row justify="space-between">
          <v-col
            cols="12"
            sm="5"
            md="4"
            offset-md="1"
            offset-lg="2"
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
                <img v-if="index !== 'website'" :src="`/${index}.png`" height="14px" class="mr-5">
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
          </v-col>
          <v-col
            cols="12"
            sm="5"
            md="4"
          >
            <v-row>
              <v-col>
                <v-btn color="#000" dark large class="pl-10 pr-10 mb-12" @click="showPayment = true">
                  Jetzt spenden
                </v-btn>
              </v-col>
            </v-row>
            <h3 class="title mb-2">
              Diese Seite teilen
            </h3>
            <v-row>
              <v-col>
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
                  <img src="/facebook.png" alt="facebook" height="25px" class="mr-8">
                </a>
                <a :href="`https://twitter.com/intent/tweet?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
                  <img src="/twitter.png" alt="twitter" height="25px" class="mr-8">
                </a>
                <a :href="`https://wa.me/?text=https%3A//shoutout.jetzt${$route.fullPath}`" target="_blank">
                  <img src="/whatsapp.png" alt="whatsapp" height="25px">
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="isCompanyPreview" justify="center">
      <v-col cols="12" xl="10">
        <v-row justify="space-between">
          <v-col cols="12" sm="5" md="4" offset-md="1" offset-lg="2">
            <v-btn text color="#C3AA7D" nuxt to="/info-control" class="px-0 text-capitalize">
              <v-img :src="require('@/assets/icon-edit.svg')" class="mr-3" color="#C3AA7D">{{ mdiFileDocumentEditOutline }}</v-img> Bearbeiten
            </v-btn>
          </v-col>
          <v-col cols="12" sm="5" md="4">
            <v-btn
              color="black"
              depressed
              dark
              nuxt
              to="/info-control"
              height="40px"
              class="text-capitalize"
            >
              Jetzt live stellen
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" v-else>
      <v-col cols="12" xl="10">
        <v-row>
          <v-col
            cols="12"
            sm="10"
            md="8"
            offset-md="1"
            offset-lg="2"
          >
            <v-btn
              color="black"
              depressed
              dark
              nuxt
              to="/info-control"
              height="40px"
              class="text-capitalize"
            >
              Zurück
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mdiFileDocumentEditOutline } from '@mdi/js'
import Donation from '~/components/Donation'

export default {
  components: {
    Donation
  },
  props: {
    company: {
      type: Object,
      required: true
    },
    isCompanyPreview: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      showPayment: false,
      mdiFileDocumentEditOutline
    }
  },
  computed: {
    image () { return this.company.picture_url || 'https://picsum.photos/1300/300' }
  }
}
</script>
<style scoped lang="scss">
.company-dialog {
  display: flex;
  background-color: rgba(255, 255, 255, 0.95);
}

.img {
  position: relative;
  &__outside {
    position: relative;
    top: 15px;
  }
  &__inner {
    position: absolute;
    top: 0px;
    right: 0px;
    &-text {
      font-family: theRambler;
      text-align: center;
      font-size: 8vw;
    }
  }
}
</style>
