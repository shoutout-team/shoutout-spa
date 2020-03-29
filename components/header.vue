<template>
  <v-container class="header">
    <v-row justify="center" align="center">
      <v-col cols="5" sm="3" xl="5">
        <nuxt-link to="/">
          <img src="~/assets/logo.png" alt="Shoutout!" class="header__logo">
        </nuxt-link>
      </v-col>
      <v-col cols="7" sm="9" xl="5" class="text-right">
        <v-btn class="font-weight-bold" text nuxt to="/overview">Übersicht</v-btn>
        <v-btn class="font-weight-bold" text nuxt :to="user ? '/edit-company' : 'signup'"> {{ user ? 'Mein Profil' : 'Für Unternehmen' }}</v-btn>
        <v-btn class="font-weight-bold" text nuxt to="/about-us">Über uns</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    user () {
      return this.$store.state.user.gid
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #fff;

  &__logo {
    width: 120px;
  }
}
</style>
