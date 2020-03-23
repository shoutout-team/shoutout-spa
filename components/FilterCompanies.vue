<template>
  <div>
    <v-flex
      d-flex
      flex-row
      justify-space-around
      align-baseline
      class="mt-8 px-5 py-9 flex-wrap filter"
    >
      <v-flex
        d-flex
        flex-column
        justify-space-between
        class="location mr-4 align-baseline mb-3"
      >
        <p class="title text-left">
          Gib deinen Standort ein oder tippe die Postleitzahl ein.
        </p>
        <div class="d-flex fill-width">
          <gmap-autocomplete class="location__Selection flex-grow-1" @place_changed="setPlace">
            <template v-slot:input="slotProps">
              <v-text-field
                ref="input"
                primary
                outlined
                prepend-inner-icon="place"
                placeholder="Location Of Event"
                @listeners="slotProps.listeners"
                @attrs="slotProps.attrs"
              />
            </template>
          </gmap-autocomplete>
          <v-btn
            color="white"
            fab
            small
            class=""
            @click="useLocation"
          >
            <v-icon>{{ mdiCrosshairsGps }}</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-slider
        v-model="maxDistance"
        min="0"
        max="50000"
        :thumb-size="48"
        :thumb-label="true"
        class="slider mr-7 mt-5"
        color="black"
        thumb-color="black"
        track-color="black"
      >
        <template v-slot:prepend>
          <p>0km</p>
        </template>
        <template v-slot:append>
          <p>21km</p>
        </template>
        <template v-slot:thumb-label="{ value }">
          {{ Math.round(value / 1000) }}km
        </template>
      </v-slider>
      <v-row justify="space-around" class="ml-0 checkbox__wrapper">
        <div
          v-for="(cat, index) in categories"
          :key="index"
          class="mr-6 checkbox my-4 py-1 px-4"
          :class="{'checkbox--active': activeCategories.includes(cat)}"
          @click="activateCategory(cat)"
        >
          {{ cat }}
        </div>
      </v-row>
    </v-flex>
  </div>
</template>

<script>
import { mdiCrosshairsGps } from '@mdi/js'
export default {
  data () {
    return {
      mdiCrosshairsGps,
      maxDistance: 10000,
      activeCategories: ['cafe', 'bar', 'shop', 'coiffeur', 'kiosk', 'food', 'club']
    }
  },
  computed: {
    categories () {
      const mappedCategories = this.$store.state.companies.map(c => c.category)
      return [...new Set(mappedCategories)]
    }
  },
  watch: {
    maxDistance () {
      this.$emit('max-distance', this.maxDistance)
    },
    activeCategories () {
      this.$emit('filter-categories', this.activeCategories)
    }
  },
  mounted () {
    this.$emit('max-distance', this.maxDistance)
    this.$emit('filter-categories', this.activeCategories)
  },
  methods: {
    activateCategory (cat) {
      if (this.activeCategories.includes(cat)) {
        const index = this.activeCategories.indexOf(cat)
        this.activeCategories.splice(index, 1)
      } else {
        this.activeCategories.push(cat)
      }
    },
    useLocation () {
      this.$emit('location')
    },
    setPlace (place) {
      const currentPlace = {
        coords: {
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng()
        }
      }
      this.$store.dispatch('setLocation', currentPlace)
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  .title__height {
    line-height: 3rem;
  }
  .location {
    max-width: 300px;

    &__Selection {
    text-align: center;
    max-width: 600px;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid black;
    text-align: left;

      &:focus {
        border: none;
      }
    }
  }

  .slider {
    max-width: 800px;
    min-width: 400px;
  }

  .checkbox__wrapper {
    max-width: 800px;
  };
  .checkbox {
    cursor: pointer;
    text-transform: capitalize;
    border: 1px solid black;
    color: black;

    &--active {
      background-color: black;
      color: white;
    }
  }
  .fill-width {
    width: 100%;
  }
}
</style>
