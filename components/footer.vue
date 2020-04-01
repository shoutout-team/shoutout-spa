<template>
  <div class="footer">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <v-row justify="space-between">
            <v-col cols="12" sm="5" md="5" lg="4">
              <v-img :src="require('~/assets/logo.png')" alt="Shoutout!" width="60" class="footer__logo mb-4" />
              <p class="">{{ about }}</p>
            </v-col>
            <v-col cols="12" sm="7" md="5" lg="5">
              <v-row justify="space-between">
                <v-col cols="4" xs="5">
                  <p class="footer__height-social footer__grey">Folge uns auf</p>
                  <p class="footer__height-contact footer__grey">Kontakt</p>
                </v-col>
                <v-col cols="8" xs="7">
                  <div class="d-flex footer__height-social">
                    <a href="https://www.instagram.com/shoutout.jetzt/" target="_blank">
                      <v-img src="/instagram.png" contain height="30" alt="instagram" class="share mr-8" />
                    </a>
                  </div>
                  <div class="footer__mail footer__height-contact">
                    {{ mail }}
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-center text-sm-right">
              <n-link
                v-if="!user"
                class="footer__link"
                :to="{name: 'signup', params: { status: 'login' } }"
              >
                Login
              </n-link>
              <span v-else class="footer__link" @click="logout">
                Logout
              </span>
              <n-link class="footer__link" to="/impressum">
                Impressum
              </n-link>
              <n-link class="footer__link" to="/datenschutz">
                Datenschutz
              </n-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      mail: 'hallo@shoutout.jetzt',
      about: 'Shoutout.jetzt ist eine Plattform, die Kleinunternehmer und Unterstützer verbindet. Das Projekt entstand im Rahmen des Hackathons #WirVsVirus der Bundesregierung.'
    }
  },
  computed: {
    user () {
      return this.$store.state.user.gid
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss" scoped>

.footer {
  font-family: "IBM Plex Sans", "sans-serif" !important;
  padding-bottom: 60px;
  background-color: #eeede8;
  font-size: 15px;
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  width: 100%;

  &__button {
    color: black;
  }

  &__grey {
    color: #6A6967;
  }

  &__mail {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.1px;
    padding-left: 5px;
    line-height: 1.5;
    text-decoration: none;
  }

  &__link {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.1px;
    padding-left: 5px;
    line-height: 1.4;
    text-decoration: none;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__height-contact {
    height: 70px;
    margin: 0;
  }

  &__height-social {
    height: 70px;
    margin: 0;
  }
}
</style>
</style>
