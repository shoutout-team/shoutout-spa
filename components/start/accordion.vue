<template>
  <div class="accordion">
    <div class="accordion__title" @click="toggle">
      {{ title }}
      <div class="accordion__icon" :class="{'accordion__icon--active' : active}" />
    </div>
    <div ref="body" class="accordion__body">
      {{ body }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Headline'
    },
    body: {
      type: String,
      default: 'Dies ist ein Beispielinhalt'
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
      if (this.active) {
        this.$refs.body.style.height = `${this.$refs.body.scrollHeight}px`
        this.$refs.body.style.paddingBottom = '20px'
      } else {
        this.$refs.body.style.height = '0px'
        this.$refs.body.style.paddingBottom = '0px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.accordion {
  border-bottom: 1px solid #000;

  &__title {
    position: relative;
    font-weight: 700;
    padding: 12px 60px 12px 0;
    cursor: pointer;
    font-size: 1.1rem;
  }

  &__body {
    font-size: 1rem;
    transition:
      padding 250ms ease,
      height 250ms ease;
    height: 0;
    padding-right: 60px;
    overflow: hidden;
    box-sizing: content-box;
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);

    &::before {
      display: block;
      transition: transform 250ms ease;
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #000;
    }

    &::after {
      display: block;
      content: '';
      transition: transform 250ms ease, opacity 200ms ease;
      position: absolute;
      top: 50%;
      width: 100%;
      height: 1px;
      transform: translateY(-50%);
      background-color: #000;
    }

    &--active {
      &::before {
        transform: translateX(-50%) rotate(90deg);
      }

      &::after {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
}
</style>
