<template>
  <v-container class="header">
    <v-row justify="center" align="center">
      <v-col cols="5" sm="3" xl="5">
        <n-link to="/">
          <img src="~/assets/logo.png" alt="Shoutout!" class="header__logo">
        </n-link>
      </v-col>
      <v-col cols="7" sm="9" xl="5" class="text-right">
        <n-link class="header__link px-3 text-uppercase mb-2 font-weight-bold" to="/overview">Viertelfreunde</n-link>
        <n-link class="header__link px-3 text-uppercase mb-2 font-weight-bold" :to="user ? '/edit-company' : 'signup'"> {{ user ? 'Mein Profil' : 'Viertelhelden' }}</n-link>
        <n-link class="header__link px-3 text-uppercase mb-2 font-weight-bold" to="/about-us">Über uns</n-link>
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

  &__link {
    position: relative;
    font-size: .875rem;
    letter-spacing: 0.75px;
    display: inline-block;
    text-decoration: none;
    white-space: nowrap;

    &.nuxt-link-active {
      &::after {
        display: block;
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 7px;
        background-image: url('~@/assets/faq-strich-helfer.png');
        background-size: 100%;
      }
    }
  }
}
</style>
