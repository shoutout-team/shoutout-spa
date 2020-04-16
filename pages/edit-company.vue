<template>
  <div>
    <v-dialog :value="!Object.keys(activeUser).length" fullscreen hide-overlay transition="dialog-bottom-transition">
      <Modal :title="fallBackModal.title" :message="fallBackModal.message" :link="fallBackModal.link.title" @link="toLogin" />
    </v-dialog>
    <v-dialog :value="preview" fullscreen hide-overlay transition="dialog-bottom-transition">
      <DisplayCompany :company="previewCompany" :preview-user="formattedUser.user" :is-company-preview="true" @close="preview = false" />
    </v-dialog>
    <v-dialog :value="!approval" fullscreen hide-overlay transition="dialog-bottom-transition">
      <Modal :title="successModal.title" :message="successModal.message" :link="successModal.link.title" @link="toOverview" />
    </v-dialog>
    <v-container v-if="Object.keys(activeUser).length" class="edit-company">
      <v-row justify="center">
        <v-col>
          <v-form
            ref="formElement"
            name="register-form"
            class="validate"
            target="_blank"
            novalidate
            @submit.prevent="updateInfo"
          >
            <v-row justify="center">
              <v-col cols="12" xl="10">
                <v-img alt="shoutout tape" max-width="300px" :src="require('~/assets/shoutout-tape-complete.png')">
                  <h1 class="edit-company__title font-weight-black pt-3">
                    Dein Profil
                  </h1>
                </v-img>
              </v-col>
            </v-row>
            <v-row class="align-baseline" justify="center">
              <v-col v-if="$store.state.company_edit_request" cols="12" xl="10" class="edit-company__feedback">
                <p v-if="$store.state.company_edit_request === 'success'"> {{ editFeedback.success }}</p>
                <p v-if="$store.state.company_edit_request === 'failed'"> {{ editFeedback.failed }}</p>
                <nuxt-link v-if="$store.state.company_edit_request === 'success'" :to="`/${activeCompany.slug}`">Zu deiner Unternehmensseite</nuxt-link>
              </v-col>
            </v-row>
            <div v-if="Object.keys(activeCompany).length" class="edit-company__profile">
              <v-row justify="center">
                <v-col cols="12" xl="10">
                  <h2 class="title font-weight-bold mt-7">
                    Infos zum Inhaber
                  </h2>
                </v-col>
              </v-row>
              <v-row justify="center" wrap>
                <v-col cols="12" sm="6" xl="5">
                  <v-text-field
                    v-model="user.firstname"
                    type="text"
                    outlined
                    hide-details="auto"
                    tile
                    color="#000"
                    label="Vorname des Inhabers"
                    :rules="nameRules"
                    :validate-on-blur="true"
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
                    label="Nachname des Inhabers"
                    :rules="nameRules"
                    :validate-on-blur="true"
                    class="required"
                  />
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" xl="10">
                  <v-row d-flex class="align-baseline">
                    <v-badge
                      avatar
                      overlap
                      bottom
                      offset-x="25"
                      offset-y="25"
                      class="mr-7 ml-3"
                    >
                      <template v-slot:badge class="register__profile-avatar">
                        <v-avatar size="60">
                          <v-img :src="Icon" />
                        </v-avatar>
                      </template>

                      <v-avatar size="70">
                        <v-img :src="avatarPicture" class="register__img">
                          <input type="file" class="register__drop-input" @input="change($event, 'uploadAvatarPicture', 'user')">
                          <v-progress-circular v-if="imageLoading" class="register__img-loader" indeterminate size="64" />
                        </v-img>
                      </v-avatar>
                    </v-badge>
                    <p class="body-2 font-weight-bold">
                      Lade ein Portrait<br> von dir hoch
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </div>
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
                  :rules="nameRules"
                  :validate-on-blur="true"
                />
              </v-col>
              <v-col cols="12" sm="6" xl="5" />
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" xl="5">
                <address-autocomplete :extra="{outlined: true, rules: addressRules, 'validate-on-blur': true}" :activate-re-geolocate="false" @location="getAddressData" />
              </v-col>
              <v-col cols="12" sm="6" xl="5">
                <v-select
                  v-model="company.category"
                  class="edit-company__select"
                  :items="categoryKeys"
                  color="black"
                  label="Kategorie"
                  no-data-text="Kategorie"
                  :rules="nameRules"
                  :validate-on-blur="true"
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
              <v-col cols="12" sm="6" xl="5">
                <v-text-field
                  v-model="company.properties.payment.paypal"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="PaypalMe Link"
                  class="required"
                  :validate-on-blur="true"
                  :rules="paypalRule"
                />
              </v-col>
              <v-col cols="12" sm="6" xl="5">
                <v-text-field
                  v-model="company.properties.payment.gofoundme"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="GoFundMe Link"
                  class="required"
                  :validate-on-blur="true"
                  :rules="gofoundmeRule"
                />
              </v-col>
              <v-col cols="12" sm="6" xl="5">
                <v-text-field
                  v-model="company.properties.payment.ticketio"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="Ticket IO Link"
                  class="required"
                  :validate-on-blur="true"
                  :rules="ticketioRule"
                />
              </v-col>
              <v-col cols="12" sm="6" xl="5">
                <v-text-field
                  v-model="company.properties.payment.startnext"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="StartNext Link"
                  class="required"
                  :validate-on-blur="true"
                  :rules="startnextRule"
                />
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-5">
              <v-col cols="12" sm="6" xl="5">
                <v-text-field
                  v-model="company.properties.payment.bank.owner"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="Kontoinhaber"
                  class="required mb-2"
                />
              </v-col>
              <v-col cols="12" sm="6" xl="5">
                <v-text-field
                  v-model="company.properties.payment.bank.iban"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="IBAN"
                  class="required"
                  :validate-on-blur="true"
                  :rules="ibanRule"
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
              <v-col cols="12" sm="4" xl="3">
                <v-text-field
                  v-model="company.properties.links.facebook"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="Facebook"
                  class="required"
                  :validate-on-blur="true"
                  :rules="facebookRules"
                />
              </v-col>
              <v-col cols="12" sm="4" xl="3">
                <v-text-field
                  v-model="company.properties.links.instagram"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="Instagram"
                  class="required"
                  :validate-on-blur="true"
                  :rules="instagramRules"
                />
              </v-col>
              <v-col cols="12" sm="4" xl="4">
                <v-text-field
                  v-model="company.properties.links.website"
                  type="text"
                  hide-details="auto"
                  outlined
                  tile
                  color="#000"
                  label="Website"
                  class="required"
                  :validate-on-blur="true"
                  :rules="websiteRule"
                />
              </v-col>
            </v-row>
            <v-row justify="center" class="align-center">
              <v-col cols="12" sm="6" xl="5">
                <p class="caption font-weight-bold">
                  Bild von deinem Unternehmen
                </p>
                <v-img class="mx-auto edit-company__upload" max-width="600px" width="100%" :src="companyPicture">
                  <input ref="fileInput" type="file" class="drop__input" @change="change($event, 'uploadCompanyPicture', 'company')">
                  <v-avatar color="black" class="edit-company__upload-icon">
                    <v-img :src="Icon" />
                  </v-avatar>
                  <v-progress-circular v-if="imageLoading" class="edit-company__upload-loader" indeterminate size="64" />
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
                  v-model="company.properties.notes"
                  auto-grow
                  outlined
                  rows="7"
                  label="Deine Worte an die Community"
                  class="mt-6"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                {{ failure }}
              </v-col>
            </v-row>
            <v-row class="align-center" justify="center">
              <v-col cols="12" sm="6" xl="5">
                <div class="edit-company__preview-button d-flex" @click="openPreview">
                  <v-avatar color="black" size="60" class="mr-5">
                    <v-icon size="40" color="white">
                      {{ mdiEye }}
                    </v-icon>
                  </v-avatar>
                  <p class="body-2 font-weight-bold">
                    Vorschau deiner Unternehmensseite
                  </p>
                </div>
              </v-col>
              <v-col cols="12" sm="6" xl="5" class="my-12">
                <v-btn
                  color="black"
                  depressed
                  dark
                  width="100%"
                  height="50px"
                  tile
                  type="submit"
                >
                  Speichern
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiEye } from '@mdi/js'
import Modal from '~/components/Modal.vue'
import imageControllerMixin from '@/mixins/imageController.js'
import Image from '~/assets/shoutout-icon-upload.svg'
import AddressAutocomplete from '@/components/AddressAutocomplete.vue'
import DisplayCompany from '@/components/DisplayCompany.vue'
import validationMixin from '@/mixins/validations.js'

export default {
  components: {
    AddressAutocomplete,
    Modal,
    DisplayCompany
  },
  mixins: [imageControllerMixin, validationMixin],
  data () {
    return {
      preview: false,
      Icon: Image,
      mdiEye,
      imageLoading: false,
      changePicture: false,
      changeAvatar: false,
      failure: '',
      uploadAvatarPicture: '',
      uploadCompanyPicture: '',
      fallbackCompanyPicture: require('~/assets/shoutout-profilbild-platzhalter.jpg'),
      fallbackAvatarPicture: require('~/assets/shoutout-profilbild-platzhalter.jpg'),
      user: {
        firstname: '',
        lastname: '',
        email: '',
        avatar_key: ''
      },
      company: {
        name: '',
        title: '',
        category: '',
        postcode: '',
        city: '',
        street: '',
        street_number: '',
        latitude: '',
        longitude: '',
        keeper_token: '',
        properties: {
          description: '',
          cr_number: '',
          notes: '',
          payment: {
            paypal: '',
            gofoundme: '',
            ticketio: '',
            startnext: '',
            bank: {
              owner: '',
              iban: ''
            }
          },
          links: {
            website: '',
            facebook: '',
            twitter: '',
            instagram: ''
          }
        }
      },
      fallBackModal: {
        title: 'Sorry',
        message: 'Bitte melde dich an um diese Seite zu sehen',
        link: { title: 'Zum Login', url: '/signup' }
      },
      successModal: {
        title: 'Vielen Dank',
        message: 'Die Anmeldung oder Änderung für dein Unternehmen ist erfolgreich eingegangen. Wir überprüfen deine Angaben und schalten deinen Eintrag anschließend frei.',
        link: { title: 'Zur Übersicht', url: '/overview' }
      },
      editFeedback: {
        success: 'Deine Bearbeitung wurde erfolgreich gespeichert.',
        failed: 'Es gab leider Probleme bei der Bearbeitung. Bitte versuche es erneut.'
      }
    }
  },
  computed: {
    companyPicture () {
      return this.uploadCompanyPicture || this.activeCompany.picture_url || this.fallbackCompanyPicture
    },
    avatarPicture () {
      return this.uploadAvatarPicture || this.storeAvatar || this.fallbackAvatarPicture
    },
    categoryKeys () {
      return Object.keys(this.$store.state.categories)
    },
    activeCompany () {
      return this.$store.state.company
    },
    activeUser () {
      return this.$store.state.user
    },
    approval () {
      return 'approved' in this.$store.state.company ? this.$store.state.company.approved : true
    },
    previewCompany () {
      return {
        ...this.company,
        picture_url: this.companyPicture,
        avatar_url: this.avatarPicture
      }
    },
    storeAvatar () {
      // Fixes finding not the keeper for showing already uploaded avatar #27
      // This 'this.activeUser.avatar_key' seems to be not present. Now we fall back to 'keeper_avatar_key' on company.
      // const keeper = this.$store.state.keepers.find(el => el.avatar_key === this.activeUser.avatar_key)
      const keeper = this.$store.state.keepers.find(el => el.avatar_key === this.activeCompany.keeper_avatar_key)

      if (!keeper) { return null }
      return keeper.avatar_url
    },
    formattedUser () {
      return {
        user: {
          name: `${this.user.firstname} ${this.user.lastname}`,
          keeper_token: this.$store.state.user.gid,
          change_avatar: this.changeAvatar,
          avatar_key: this.user.avatar_key || this.activeUser.avatar_key
        }
      }
    }
  },
  watch: {
    activeCompany () {
      this.setCompany()
    },
    activeUser () {
      this.setUser()
    }
  },
  beforeMount () {
    this.$store.commit('setCompanyRequest', null)
    this.$store.commit('setCompanyEditRequest', null)
    this.setCompany()
    this.setUser()
    if (this.activeUser.gid) {
      this.$store.dispatch('setCompany', { keeper_token: this.activeUser.gid })
    }
  },
  methods: {
    getAddressData (place) {
      this.company.latitude = place.latitude || ''
      this.company.longitude = place.longitude || ''
      this.company.city = place.locality || ''
      this.company.street = place.route || ''
      this.company.postcode = place.postal_code || ''
      this.company.street_number = place.street_number || ''
      this.addressRules = [this.validateAddress(place) || 'Bitte gib eine vollständige Adresse ein. Stadt, Straße & Hausnummer']
    },
    setCompany () {
      if (Object.keys(this.activeCompany).length) {
        this.company = JSON.parse(JSON.stringify(this.activeCompany))
      }
    },
    setUser () {
      if (Object.keys(this.activeUser).length) {
        const user = JSON.parse(JSON.stringify(this.activeUser))
        const name = user.name.split(' ')
        this.user.firstname = name[0]
        this.user.lastname = name[1]
      }
    },
    updateInfo () {
      const { formElement } = this.$refs
      formElement.validate()
      if (process.client) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      if (Object.keys(this.activeCompany).length) {
        this.$store.dispatch('postUser', this.formattedUser)
      }
      this.$store.dispatch('postCompany', {
        ...this.company,
        title: this.company.name,
        keeper_token: this.$store.state.user.gid,
        change_picture: this.changePicture
      })
    },
    openPreview () {
      this.preview = true
    },
    toLogin () {
      this.$router.push({ path: this.fallBackModal.link.url })
    },
    toOverview () {
      this.$router.push({ path: this.successModal.link.url })
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

  &__feedback {
    margin: 20px 0;
    background-color: #000;
    color: #fff;
    a {
      color: #fff;
    }
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

  .edit-company {
    &__title {
      font-family: 'theRambler';
      position: absolute;
      font-size: 3.3rem;
      top: 50%;
      transform: translateY(-50%);
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

  &__preview-button {
    align-items: center;
    cursor: pointer;

    p {
      margin: 0
    }
  }

  &__upload-loader {
    top: 50%;
    left: 50%;
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
}

.register {
  &__drop-input {
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &__img {
    cursor: pointer;
    position: relative;
  }

  &__img-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .v-badge__badge {
    pointer-events: none;
    cursor: pointer;
  }
}
</style>
