<template>
  <div class="card__wrapper px-3 my-11">
    <v-img width="70px" class="text-center card__img" alt="circle" :src="circles[content.number - 1]">
      <p class="card__text">{{ content.number }}</p>
    </v-img>
    <p class="mt-7 mb-0 body-1 font-weight-black">{{ content.introductionStep }}</p>
    <v-img class="text-center card__img-bottom" height="auto" width="80%" alt="stripe" :src="require('@/assets/shoutout-tape-complete.png')">
      <p class="card__text card__text--theRambler">{{ content.headline }}</p>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      circles: [
        require('@/assets/circle1.png'),
        require('@/assets/circle2.png'),
        require('@/assets/circle3.png'),
        require('@/assets/circle4.png')
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.card__wrapper {
  position: relative;
  background-color: rgba($color: #eeede9, $alpha: 1.0);
  min-width: 330px;
  margin-right: 40px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    width: calc(50% - 20px);
    min-width: auto;
    margin-right: 20px;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1200px) {
    width: calc(25% - 27px);
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.card {
  &__img {
    position: relative;
    top: -12px;
  }

  &__img-bottom {
    top: auto;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%);
    width: 70%;
  }

  &__text {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
    font-size: 1.6rem;

    &--theRambler {
      font-family: 'theRambler';
      font-size: 3.3rem;
    }
  }
}
</style>
