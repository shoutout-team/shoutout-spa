<template>
  <v-container>
    <v-form
      v-model="valid"
      name="register-form"
      class="validate"
      novalidate
      @submit.prevent="login"
    >
      <v-row justify="center">
        <v-col cols="12" sm="6" xl="5">
          <v-text-field
            v-model="user.email"
            type="email"
            hide-details="auto"
            outlined
            tile
            color="#000"
            label="E-Mail Adresse"
            :rules="fieldRules"
            class="required"
          />
        </v-col>
        <v-col cols="12" sm="6" xl="5">
          <v-text-field
            v-model="user.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            hide-details="auto"
            outlined
            tile
            color="#000"
            label="Password"
            :rules="fieldRules"
            @click="show = !show"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-btn text nuxt to="resetpassword" color="#C3AA7D" class="px-0 text-none body-2">Password vergessen</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-6">
        <v-col cols="12" xl="10">
          <p v-if="loginRequest === 'failed'">
            Es scheint ein Fehler aufgetreten zu sein. Bitte überprüfe deine Zugangsdaten.
          </p>
          <v-btn
            color="black"
            depressed
            height="44px"
            tile
            dark
            width="100%"
            max-width="426"
            :loading="loginRequest === 'pending'"
            type="submit"
          >
            Jetzt anmelden
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      show: false,
      fieldRules: [
        v => !!v || 'Pflichtfeld'
      ]
    }
  },
  computed: {
    loginRequest () {
      return this.$store.state.login
    }
  },
  watch: {
    loginRequest (value) {
      if (value === 'success') {
        this.$router.push({ path: '/overview' })
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
    }
  }
}
</script>
