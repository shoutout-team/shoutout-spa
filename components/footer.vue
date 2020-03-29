<template>
  <v-container class="footer">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" xl="5">
        <v-img />
        <p>
          Shoutout.jetzt ist eine Plattform, die Kleinunternehmen und Unterstützer verbindet. Das Projekt entstand im Rahmen des Hackathon #WirVsVirus der Bundesregierung.
        </p>
      </v-col>
      <v-col cols="12" sm="6" xl="5">
        <v-row>
          <v-col>
            <v-row class="my-5">
              <v-col class="d-flex justify-end">
                Folge uns:
              </v-col>
            </v-row>
            <v-row class="my-5">
              <v-col class="d-flex justify-end">
                Kontakt:
              </v-col>
            </v-row>
            <v-row class="my-5" />
          </v-col>
          <v-col>
            <v-row class="my-5 footer__icon-bar">
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
            <v-row class="my-5">
              <v-col>
                <a href="mailto:hello@shoutout.jetzt" target="_blank">
                  hello@shoutout.jetzt
                </a>
              </v-col>
            </v-row>
            <v-row class="my-5">
              <v-col>
                <v-btn text class="button" nuxt to="/impressum">
                  Impressum
                </v-btn>
                <v-btn text class="button" nuxt to="/datenschutz">
                  Datenschutz
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #fff;

  &__icon-bar {
    height: 48px;
  }
}
</style>
