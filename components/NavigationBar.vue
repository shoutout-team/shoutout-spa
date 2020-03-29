<template>
  <v-navigation-drawer
    v-model="status"
    color="rgba(0, 0, 0, 0.45)"
    floating
    :right="true"
    absolute
    height="auto"
    dark
    class="pb-12"
  >
    <v-list
      dense
      nav
      class="py-0"
    >
      <v-list-item @click="emitStatus">
        <v-icon>{{ mdiViewSequential }}</v-icon>
        <v-list-item-content>
          <v-list-item-title class="title">Shoutout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiArrowRightBoldBox, mdiClipboardAccountOutline, mdiHome, mdiViewSequential } from '@mdi/js'

export default {
  props: {
    statusNav: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  mounted () {
    this.status = this.statusNav
  },
  data () {
    return {
      status: false,
      mdiViewSequential,
      items: [
        { title: 'Startseite', icon: mdiHome },
        { title: 'Login Unternehmen', icon: mdiArrowRightBoldBox },
        { title: 'Über uns', icon: mdiClipboardAccountOutline }
      ]
    }
  },
  methods: {
    emitStatus () {
      this.$emit('toggleNav', false)
    }
  }
}
</script>
