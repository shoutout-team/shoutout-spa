<template>
  <v-container>
    <div class="card__wrapper px-3 my-5">
      <v-img width="50px" class="text-center card__img" alt="circle" :src="require('@/assets/circle.png')">
        <p class="card__text">{{ content.number }}</p>
      </v-img>
      <p class="mt-7 mb-0 body-1 font-weight-black">{{ content.ntroductionStep }}</p>
      <v-img class="text-center card__img--bottom" width="100%" alt="stripe" :src="require('@/assets/shoutout-tape-complete.png')">
        <p class="card__text card__text--theRambler">{{ content.headline }}</p>
      </v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
.card__wrapper {
  background-color: rgba($color: #ebebeb, $alpha: 1.0);
  width: 330px;
}

.card {
  &__img {
    position: relative;
    top: -12px;

    &--bottom {
      position: relative;
      top: 30px;
    }
  }
  &__text {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
    &--theRambler {
      font-family: 'theRambler';
      font-size: 40px;
    }
  }
}
</style>
