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
                <h1 class="display-1 font-weight-bold pt-3">
                  Dein Profil
                </h1>
              </v-img>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="email"
                value=""
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
                value=""
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Nachnahme des Inhabers"
                class="required"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="text"
                value=""
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
                  offset-x="20"
                  offset-y="20"
                  class="mr-7 ml-3"
                >
                  <template v-slot:badge>
                    <v-avatar>
                      <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png" />
                    </v-avatar>
                  </template>

                  <v-avatar size="60">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png">
                      <input type="file" style="display: none" ref="fileInput" />
                    </v-img>
                  </v-avatar>
                </v-badge>
                <p class="body-2 font-weight-bold">Lade ein Portrait<br> von dir hoch</p>
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
                value=""
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
                value=""
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
              <v-text-field
                type="text"
                value=""
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Adresse"
                class="required"
              />
            </v-col>
            <v-col cols="12" sm="6" xl="5">
              <v-combobox
                v-model="selectedCategories"
                :items="categories"
                hide-selected
                item-color="black"
                color="black"
                label="Kategorie"
                multiple
                deletable-chips
                small-chips
                no-data-text="Kategorie"
                outlined
              />
            </v-col>
          </v-row>
          <v-row justify="center" class="align-center">
            <v-col cols="12" sm="6" xl="5">
              <p class="caption font-weight-bold">
                Profilbilder
              </p>
              <v-img max-width="600px" d-flex class="align-center" width="100%" src="https://picsum.photos/550/300?random='asdasdas'">
                <v-avatar color="black" class="temp">
                  <v-icon color="white" size="30px">
                    {{ mdiUpload }}
                  </v-icon>
                </v-avatar>
                <input type="file" style="display: none" ref="fileInput" />
              </v-img>
            </v-col>
            <v-col cols="12" sm="6" xl="5">
              <h2 class="title font-weight-bold">
                Persönliches Anschreiben
              </h2>
              <v-textarea
                auto-grow
                outlined
                rows="7"
                label="Dein Wort an die Community"
                class="mt-6"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiUpload } from '@mdi/js'

export default {
  data () {
    return {
      mdiUpload,
      categories: ['cafe', 'bar', 'shop', 'coiffeur', 'kiosk', 'food', 'club'],
      selectedCategories: []
    }
  }
}
</script>

<style scoped>
.temp {
  left: 50%;
  transform: translateX(-50%);
}
</style>
