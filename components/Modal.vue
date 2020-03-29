<template>
  <div>
    <Header />
    <v-container class="modal pa-3">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="modal__bg">
            <div class="modal__image-wrapper">
              <v-img :src="require('~/assets/shoutout-tape-complete.png')" alt="Shoutout" />
              <h1 class="modal__title">
                {{ title }}
              </h1>
            </div>
            <p class="display-2 modal__message font-weight-black">
              {{ message }}
            </p>
          </div>
          <div class="text-center">
            <p class="modal__link title" @click="$emit('link')">
              {{ link }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  name: 'Modal',
  components: { Header },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    message: {
      type: String,
      default: 'Message'
    },
    link: {
      type: String,
      default: 'Link'
    }
  }
}
</script>

<style lang="scss">
.modal {
  background-color: #fff;
  height: 100vh;

  &__bg {
    position: relative;
    background-color: #f4f4f4;
    padding: 80px 30px;
    margin-bottom: 50px;
    margin-right: -10px;

  }

  &__image-wrapper {
    position: absolute;
    top: -15px;
    right: 20px;
    width: 270px;
  }

  &__title {
    font-family: 'theRambler';
    position: absolute;
    font-size: 3.3rem;
    top: -3px;
    left: 65px;
  }

  &__link {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
