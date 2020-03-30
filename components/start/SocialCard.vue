<template>
  <div class="card__wrapper px-3 my-5">
    <v-img width="100%" :alt="content.img.alt" :src="content.img.src" />
    <p class="mt-3 card__paragraph">{{ content.subline }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  &__wrapper {
    min-width: 330px;

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

  &_paragraph {
    font-size: 1rem;
    line-height: 1.4;
  }
}

</style>
