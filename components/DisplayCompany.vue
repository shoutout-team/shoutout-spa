<template>
  <div v-if="company" class="display-company">
    <v-container v-if="company" fluid>
      <v-dialog v-model="showPayment" content-class="company-dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <Donation :payments="company.properties.payment" @close="showPayment = false" />
      </v-dialog>
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
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <v-row justify="space-between">
            <v-col
              cols="12"
              sm="8"
              md="9"
            >
              <h1 class="display-1 mb-1 font-weight-black">
                {{ company.title }}
              </h1>

              <p>{{ company.city }}, {{ company.street }} {{ company.street_number }}</p>
              <div class="mb-10">
                <span
                  v-for="(url, index) in company.properties.links"
                  :key="index"
                >
                  <a
                    v-if="url"
                    :href="getLink(url)"
                    target="_blank"
                  >
                    <img :src="`/${index}.png`" height="14px" class="mr-5">
                  </a>
                </span>
              </div>
              <p class="title notes">
                {{ company.properties.notes }}
              </p>
              <v-row>
                <v-col class="d-flex align-center mb-5">
                  <v-avatar v-if="avatar" size="90" class="mr-5">
                    <v-img alt="profile photo" :src="avatar" />
                  </v-avatar>
                  <v-row>
                    <v-col>
                      <h2 v-if="previewUser" class="title">{{ previewUser.name }}</h2>
                      <h2 v-else class="title">{{ company.keeper_name }}</h2>
                      <p class="body-2">Inhaber/in</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              md="3"
              class="text-right"
            >
              <v-row v-if="!noDonation">
                <v-col>
                  <v-btn
                    color="#000"
                    dark
                    tile
                    large
                    depressed
                    class="pl-10 pr-10 mb-12"
                    @click="showPayment = true"
                  >
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
          <v-btn color="#000" tile depressed dark @click="$emit('close')">
            Vorschau schließen
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-else justify="start">
        <v-col cols="12" xl="10">
          <v-btn
            color="black"
            depressed
            dark
            nuxt
            tile
            to="/overview"
            height="40px"
            class="text-capitalize"
          >
            Zurück
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    previewUser: {
      type: Object,
      default: () => {}
    },
    isCompanyPreview: {
      type: Boolean,
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
    image () { return this.company.picture_url || 'https://picsum.photos/1300/300' },
    avatar () {
      if (this.company.avatar_url) { return this.company.avatar_url }
      const keeper = this.$store.state.keepers.find(el => el.avatar_key === this.company.keeper_avatar_key)
      if (!keeper) { return null }
      return keeper.avatar_url
    },
    noDonation () {
      return !this.company.properties.payment.paypal && !this.company.properties.payment.bank.iban && !this.company.properties.payment.gofoundme
    }
  },
  mounted () {
    this.scrollTopTop()
  },
  methods: {
    scrollTopTop () {
      if (process.client) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    trimString (x) {
      return x.replace(/^\s+|\s+$/gm, '')
    },
    getLink (url) {
      if (url.startsWith('http')) { return url }
      return `https://${url}`
    }
  }
}
</script>
<style lang="scss">

.company-dialog {
  display: flex;
  background-color: rgba(255, 255, 255, 1);
}

.display-company {
  background: #fff;
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
        font-size: 45px;
      }
    }
  }

  .notes {
    white-space: pre-line;
  }
}
</style>
