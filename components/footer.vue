<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" xl="5">
        <a href="https://www.instagram.com/shoutout.jetzt/" target="_blank">
          <img src="/instagram.png" alt="facebook" class="share mr-8">
        </a>
      </v-col>
      <v-col cols="6" xl="5" class="text-right">
        <v-btn
          v-if="!user"
          text
          class="footer__button"
          nuxt
          :to="{name: 'signup', params: { status: 'login' } }"
        >
          Login
        </v-btn>
        <v-btn v-else text class="footer__button" @click="logout">
          Logout
        </v-btn>
        <v-btn text class="footer__button" nuxt to="/impressum">
          Impressum
        </v-btn>
        <v-btn text class="footer__button" nuxt to="/datenschutz">
          Datenschutz
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',
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
  margin-top: 50px;
  height: 50px;

  &__button {
    color: black;
  }
}
</style>
</style>
