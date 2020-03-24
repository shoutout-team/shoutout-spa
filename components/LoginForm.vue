<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" xl="5">
        <v-text-field
          type="email"
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
        <v-text-field
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          :value="user.password"
          hide-details="auto"
          outlined
          tile
          color="#000"
          label="Password"
          class="required"
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
        <v-btn
          color="black"
          depressed
          height="44px"
          tile
          dark
          width="100%"
          max-width="426"
          nuxt
          to="/login"
        >
          Jetzt anmelden
        </v-btn>
      </v-col>
    </v-row>
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
      show: false
    }
  }
}
</script>
