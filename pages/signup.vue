<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <v-img alt="shoutout tape" max-width="300px" :src="require('~/assets/shoutout-tape.png')">
              <h1 class="display-1 font-weight-bold pt-3">
                {{ headline }}
              </h1>
            </v-img>
          </v-col>
        </v-row>
        <v-row v-if="status === 'new'" justify="center" wrap>
          <v-col cols="12" sm="6" xl="5">
            <v-radio-group v-model="status" :mandatory="true" row wrap>
              <v-radio color="black" label="Ich bin neu hier" value="new" class="mt-4" />
              <v-radio color="black" label="Ich bin bereits registriert" value="recurring" class="mt-4" />
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" xl="5">
            <p>
              Damit dich Supporter finden können, brauchen wir ein paar Infos von dir.
              Nach der Registrierung schalten wir dich frei und du kannst dein Profil anlegen.
            </p>
          </v-col>
        </v-row>
        <v-row v-else justify="center" wrap>
          <v-col cols="12" xl="10">
            <v-radio-group v-model="status" :mandatory="true" row wrap>
              <v-radio color="black" label="Ich bin neu hier" value="new" class="mt-4" />
              <v-radio color="black" label="Ich bin bereits registriert" value="recurring" class="mt-4" />
            </v-radio-group>
          </v-col>
        </v-row>
        <register-form v-if="status === 'new'" />
        <login-form v-if="status === 'recurring'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  components: {
    RegisterForm,
    LoginForm
  },
  data () {
    return {
      status: 'new'
    }
  },
  computed: {
    headline () {
      return this.status === 'new' ? 'Registrieren' : 'Melde dich an'
    }
  }
}
</script>
