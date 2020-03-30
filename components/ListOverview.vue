<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col cols="12" xl="10">
        <v-row justify="start" align="end">
          <ListElement
            v-for="company in sortedCompanys"
            :key="company.id"
            class="mb-2"
            :headline="company.title"
            :category="company.category"
            :street="company.street"
            :city="company.city"
            :hnr="company.street_number"
            :distance="company.distance"
            :image="company.picture_url"
            :link="company.slug"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListElement from '~/components/ListElement'
export default {
  components: {
    ListElement
  },
  props: {
    sortedCompanys: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      limit: 24
    }
  }
}
</script>
