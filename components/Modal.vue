<template>
  <v-container class="modal pa-3">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="modal__bg">
          <div class="modal__image-wrapper">
            <v-img :src="require('~/assets/shoutout-tape.png')" alt="Shoutout" />
            <h1 class="modal__title display-2">
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
</template>

<script>
export default {
  name: 'Modal',
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
  margin-top: 120px;
  background-color: #fff;
  height: calc(100vh - 120px);

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
    position: absolute;
    top: 5px;
    right: 30px;
  }

  &__link {
    text-decoration: underline;
  }
}
</style>
