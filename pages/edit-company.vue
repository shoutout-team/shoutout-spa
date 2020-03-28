<template>
  <v-container class="edit-company">
    <v-row justify="center">
      <v-col>
        <v-form
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
                v-model="user.firstname"
                type="text"
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
                v-model="user.lastname"
                type="text"
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
                v-model="user.email"
                type="text"
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
                    <v-avatar size="60" class="edit-company__profile-avatar">
                      <v-img :src="Icon" />
                    </v-avatar>
                  </template>

                  <v-avatar size="70">
                    <v-img :alt="profileImage.alt" :src="profileImage.src">
                      <input type="file" class="drop__input" @input="change($event, 'profileImage')">
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
                v-model="company.name"
                type="text"
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
                v-model="company.crnumber"
                type="text"
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
              <v-select
                v-model="company.category"
                class="edit-company__select"
                :items="categoryKeys"
                color="black"
                label="Kategorie"
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
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="company.payment.paypal"
                type="text"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Paypal Link"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="company.payment.gofoundme"
                type="text"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="GoFundMe Link"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="company.payment.iban"
                type="text"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="IBAN"
                class="required"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" xl="10">
              <h2 class="title font-weight-bold mt-10">
                Social Media
              </h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="company.links.facebook"
                type="text"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Facebook"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="company.links.instagram"
                type="text"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Instagram"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="company.links.website"
                type="text"
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Website"
                class="required"
              />
            </v-col>
          </v-row>
          <v-row justify="center" class="align-center">
            <v-col cols="12" sm="6" xl="5">
              <p class="caption font-weight-bold">
                Bild von deinem Unternehmen
              </p>
              <v-img class="mx-auto edit-company__upload" max-width="600px" width="100%" :alt="companyImage.alt" :src="companyImage.src">
                <input ref="fileInput" type="file" class="drop__input" @input="change($event, 'companyImage')">
                <v-avatar color="black" class="edit-company__upload-icon">
                  <v-img :src="Icon" />
                </v-avatar>
              </v-img>
              <!-- <v-row class="align-center">
                <v-col v-for="(image, key) in images" :key="key" cols="3">
                  <v-img height="60px" :alt="image.alt" :src="image.src" @click="dropImage(key)" />
                </v-col>
              </v-row> -->
            </v-col>
            <v-col cols="12" sm="6" xl="5" class="mt-12">
              <h2 class="title font-weight-bold">
                Persönliches Anschreiben
              </h2>
              <v-textarea
                v-model="company.notes"
                auto-grow
                outlined
                rows="7"
                label="Deine Worte an die Community"
                class="mt-6"
                hint="Max. 500 Zeichen"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              {{ failure }}
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
      failure: '',
      images: [],
      profileImage: {
        alt: 'User Profilbild',
        src: require('~/assets/shoutout-user-profilbild.png'),
        key: ''
      },
      companyImage: {
        alt: 'Profilbild',
        src: require('~/assets/shoutout-profilbild-platzhalter.jpg'),
        key: ''
      },
      user: {
        firstname: '',
        lastname: '',
        email: ''
      },
      company: {
        name: '',
        category: '',
        notes: '',
        crnumber: '',
        address: {
          postcode: '',
          city: '',
          street: '',
          streetnumber: ''
        },
        payment: {
          paypal: '',
          gofoundme: '',
          iban: ''
        },
        links: {
          website: '',
          facebook: '',
          twitter: '',
          instagram: ''
        }
      }
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    categoryKeys () {
      return Object.keys(this.categories)
    }
  },
  mounted () {
    if (Object.keys(this.$store.state.company).length) {
      this.company = this.$store.state.company
    }
  },
  methods: {
    getAddressData (place) {
      this.company.latitude = place.latitude
      this.company.longitude = place.longitude
      this.company.address.city = place.administrative_area_level_2
      this.company.address.steet = place.route
      this.company.address.postcode = place.postal_code
      this.company.address.streetnumber = place.street_number
    },
    updateInfo () {
      try {
        this.$store.dispatch('setCompany', this.company)
        this.$store.dispatch('postCompany', {
          name: this.company.name,
          title: this.company.name,
          category: this.company.category,
          postcode: this.company.address.postcode,
          city: this.company.address.city,
          street: this.company.address.street,
          streetnumber: this.company.address.streetnumber,
          latitude: this.company.latitude,
          longitude: this.company.longitude,
          picturekey: this.companyImage.key,
          keepertoken: this.$store.state.user.gid,
          properties: {
            description: this.company.notes,
            crnumber: this.company.crnumber,
            notes: this.company.notes,
            payment: {
              paypal: this.company.payment.paypal,
              gofoundme: this.company.payment.gofoundme,
              bank: {
                owner: `${this.user.firstname} ${this.user.lastname}`,
                iban: this.company.payment.iban
              }
            },
            links: {
              website: this.company.links.website,
              facebook: this.company.links.facebook,
              twitter: this.company.links.twitter,
              instagram: this.company.links.instagram
            }
          }
        })
      } catch {
        this.failure = 'Es ist leider ein Fehler bei der Datenübertragung aufgreteten. Bitte überprüfe deine Eingaben sowie deine Internetverbindung.'
      }
    }
  }
}
</script>

<style lang="scss">
.v-list-item__content {
  text-transform: capitalize;
}

.drop__input {
  cursor: pointer;
}
.edit-company {
  &__select {
    text-transform: capitalize;
  }

  &__upload {
    position: relative;
    cursor: pointer;

    &:hover {
      .edit-company__upload-icon {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }

  .v-badge__badge {
    pointer-events: none;
    cursor: pointer;
  }

  &__upload-icon {
    left: 50%;
    top: 50%;
    position: absolute !important;
    transform: translate(-50%, -50%);
    transition: transform 200ms ease;
    pointer-events: none;
  }

  .drop {
    &__input {
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
