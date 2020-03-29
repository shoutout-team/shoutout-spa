<template>
  <div class="card__wrapper px-3 my-11">
    <v-img width="70px" class="text-center card__img" alt="circle" :src="require('@/assets/circle.png')">
      <p class="card__text">{{ content.number }}</p>
    </v-img>
    <p class="mt-7 mb-0 body-1 font-weight-black">{{ content.introductionStep }}</p>
    <v-img class="text-center card__img-bottom" width="80%" alt="stripe" :src="require('@/assets/shoutout-tape-complete.png')">
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
  }
}
</script>

<style scoped lang="scss">
.card__wrapper {
  background-color: rgba($color: #eeede9, $alpha: 1.0);
  min-width: 330px;
  margin-right: 40px;

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
    position: relative;
    top: 50px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  &__text {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
    font-size: 1.7rem;

    &--theRambler {
      font-family: 'theRambler';
      font-size: 3.3rem;
    }
  }
}
</style>
