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
            <v-col cols="12" sm="6" xl="5">
              <v-text-field
                type="email"
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
              <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                value=""
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
          <v-row>
            <v-col>
              <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                value=""
                hide-details="auto"
                outlined
                tile
                color="#000"
                label="Password"
                class="required"
                @click="show = !show"
              />
            </v-col>
            <v-col>
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                hide-details="auto"
                show-size
              >
                <v-badge
                  avatar
                  bordered
                  overlap
                >
                  <template v-slot:badge>
                    <v-avatar>
                      <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png" />
                    </v-avatar>
                  </template>

                  <v-avatar size="40">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png" />
                  </v-avatar>
                </v-badge>
              </v-file-input>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
