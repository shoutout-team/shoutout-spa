<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          v-model="gid"
          type="text"
          outlined
          tile
          color="#000"
          label="approval"
        />
        <v-btn
          color="black"
          depressed
          height="44px"
          tile
          dark
          max-width="426"
          @click="approve"
        >
          Approve
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdminApproval',
  data () {
    return {
      gid: ''
    }
  },
  methods: {
    approve () {
      this.$axios.$post('companies/approve', { keeper_token: this.gid })
    }
  }
}
</script>
