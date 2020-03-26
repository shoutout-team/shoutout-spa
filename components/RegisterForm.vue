<template>
  <v-container>
    <v-form
      v-model="valid"
      name="register-form"
      class="validate"
      novalidate
      @submit.prevent="signUp"
    >
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <h2 class="title font-weight-bold">
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
            :rules="nameRules"
            class="required"
          />
        </v-col>
      </v-row>
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
            :rules="emailRules"
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
            minlength="8"
            :rules="passwordRules"
            tile
            color="#000"
            label="Password"
            class="required"
            @click="show = !show"
          />
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
            v-model="user.company_name"
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
            v-model="user.company_registry_number"
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
      <v-row justify="center" class="mt-6">
        <v-col cols="12" xl="10">
          <v-btn
            color="black"
            :depressed="!valid"
            height="44px"
            tile
            dark
            width="100%"
            max-width="426"
            type="submit"
          >
            Jetzt registrieren
          </v-btn>
          <p v-if="failure">
            Ein Fehler ist aufgetreten. Bitte überprüfe deine Daten und deine Internetverbindung.
          </p>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import endpoints from '@/store/utils/endpoints.js'
export default {
  data () {
    return {
      valid: false,
      failure: false,
      user: {
        status: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        company_name: '',
        company_registry_number: ''
      },
      passwordRules: [
        v => !!v || 'Pflichtfeld',
        v => v.length >= 8 || 'Passwort muss aus mindestens 8 Zeichen bestehen'
      ],
      emailRules: [
        v => !!v || 'Pflichtfeld',
        v => /.+@.+/.test(v) || 'E-Mail Adresse muss gültig sein'
      ],
      nameRules: [
        v => !!v || 'Pflichtfeld'
      ],
      show: false
    }
  },
  computed: {
    formattedUser () {
      return {
        user: {
          name: `${this.user.firstname} ${this.user.lastname}`,
          email: this.user.email,
          password: this.user.password
        }
      }
    }
  },
  methods: {
    async signUp () {
      try {
        this.failure = false
        await this.$axios.$post(endpoints.SIGNUP_ENDPOINT, this.formattedUser)
        this.$emit('success')
      } catch {
        this.failure = true
      }
    }
  }
}
</script>
