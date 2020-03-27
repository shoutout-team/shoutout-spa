<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-form
          action=""
          method="post"
          name="register-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <v-row justify="center">
            <v-col cols="12" xl="10">
              <v-img alt="shoutout tape" max-width="300px" :src="require('~/assets/shoutout-tape.png')">
                <h1 class="display-1 font-weight-black pt-3">
                  Dein Profil
                </h1>
              </v-img>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" xl="10">
              <h2 class="title font-weight-bold mt-7">
                Infos zu dir
              </h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="text"
                :value="user.firstname"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Vornahme des Inhabers"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="text"
                :value="user.lastname"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Nachnahme des Inhabers"
                class="required"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="text"
                :value="user.email"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="E-Mail Adresse"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="6" xl="5">
              <v-row d-flex class="align-baseline">
                <v-badge
                  avatar
                  overlap
                  bottom
                  offset-x="25"
                  offset-y="25"
                  class="mr-7 ml-3"
                >
                  <template v-slot:badge>
                    <v-avatar size="60">
                      <v-img :src="Icon" />
                    </v-avatar>
                  </template>

                  <v-avatar size="70">
                    <v-img :alt="profilPhoto.alt" :src="profilPhoto.src">
                      <input type="file" class="drop__input" @input="change($event, 'profilPhoto')">
                    </v-img>
                  </v-avatar>
                </v-badge>
                <p class="body-2 font-weight-bold">
                  Lade ein Portrait<br> von dir hoch
                </p>
              </v-row>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" xl="10">
              <h2 class="title font-weight-bold mt-7">
                Infos zum Unternehmen
              </h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="text"
                :value="company.company_name"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Name des Unternehmens"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="text"
                :value="company.company_registry_number"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Handsregisternummer"
                class="required"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" xl="5">
              <address-autocomplete @location="getAddressData" />
            </v-col>
            <v-col cols="12" sm="6" xl="5">
              <v-combobox
                v-model="company.category"
                :items="categories"
                hide-selected
                item-color="black"
                color="black"
                label="Kategorie"
                deletable-chips
                small-chips
                no-data-text="Kategorie"
                outlined
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" xl="10">
              <h2 class="title font-weight-bold mt-7">
                Spenden Optionen
              </h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="4" xl="3">
              <v-text-field
                type="text"
                :value="company.payment.paypal"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Paypal"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="4" xl="3">
              <v-text-field
                type="text"
                :value="company.payment.gofoundme"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="GoFundMe"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="4" xl="4">
              <v-text-field
                type="text"
                :value="company.payment.iban"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="IBAN"
                class="required"
              />
            </v-col>
          </v-row>
          <v-row justify="center" class="align-center">
            <v-col cols="12" sm="6" xl="5">
              <p class="caption font-weight-bold">
                Profilbilder
              </p>
              <v-img class="mx-auto" max-width="600px" width="100%" :alt="currentImage.alt" :src="currentImage.src">
                <input ref="fileInput" type="file" class="drop__input" @input="change">
                <v-avatar color="black" class="temp">
                  <v-img :src="Icon" />
                </v-avatar>
              </v-img>
              <v-row class="align-center">
                <v-col v-for="(image, key) in images" :key="key" cols="3">
                  <v-img height="60px" :alt="image.alt" :src="image.src" @click="dropImage(key)" />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6" xl="5" class="mt-12">
              <h2 class="title font-weight-bold">
                Persönliches Anschreiben
              </h2>
              <v-textarea
                auto-grow
                outlined
                :value="company.desc"
                rows="7"
                label="Dein Wort an die Community"
                class="mt-6"
                hint="Max. 500 Zeichen"
              />
            </v-col>
          </v-row>
          <v-row class="align-baseline" justify="center">
            <v-col cols="12" sm="6" xl="5">
              <v-btn
                nuxt
                to="/"
                depressed
                width="100%"
              >
                <v-avatar color="black" size="70" class="mr-5">
                  <v-icon size="40" color="white">
                    {{ mdiEye }}
                  </v-icon>
                </v-avatar>
                <p class="body-2 font-weight-bold">
                  Vorschau deiner Unternehmensseite
                </p>
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" xl="5" class="my-12">
              <v-btn
                color="black"
                depressed
                dark
                width="100%"
                height="50px"
                tile
                nuxt
                to="/"
              >
                Speichern
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEye } from '@mdi/js'
import imageControllerMixin from '@/mixins/imageController.js'
import Image from '~/assets/shoutout-icon-upload.svg'
import AddressAutocomplete from '@/components/AddressAutocomplete.vue'

export default {
  components: {
    AddressAutocomplete
  },
  mixins: [imageControllerMixin],
  data () {
    return {
      Icon: Image,
      mdiEye,
      categories: ['cafe', 'bar', 'shop', 'coiffeur', 'kiosk', 'food', 'club'],
      images: [],
      profilPhoto: {
        alt: 'user profilbild',
        src: require('~/assets/shoutout-user-profilbild.png')
      },
      defaultImage: {
        alt: 'profilbild platzhalter',
        src: require('~/assets/shoutout-profilbild-platzhalter.jpg')
      },
      currentImage: {
        alt: 'profilbild platzhalter',
        src: require('~/assets/shoutout-profilbild-platzhalter.jpg')
      },
      user: {
        firstname: '',
        lastname: '',
        email: ''
      },
      company: {
        company_name: '',
        company_registry_number: '',
        adresse: '',
        category: '',
        payment: {
          paypal: '',
          gofoundme: '',
          iban: ''
        }
      }
    }
  },
  methods: {
    getAddressData (place) {
      const currentPlace = {
        coords: {
          latitude: place.latitude,
          longitude: place.longitude
        }
      }
      this.$store.dispatch('setLocation', currentPlace)
    }
  }
}
</script>

<style scoped lang="scss">
.temp {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.drop {
  &__input {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
