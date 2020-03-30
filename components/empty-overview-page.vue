<template>
  <v-row justify="center">
    <v-col cols="12" lg="10" xl="8">
      <v-img alt="empty overview page" class="d-flex align-center pl-12" :src="require('@/assets/shoutout-empty.png')">
        <div class="content__wrapper" :class="{'ml-6': $vuetify.breakpoint.lgAndUp}">
          <h2 class="content__headline mb-2">
            Dein Viertel ist noch leer
          </h2>
          <p class="content__desc mb-1">
            Du weist von Läden die Hilfe brauchen?<br>
            Erzähl ihnen von unserer Plattform.
          </p>
          <a :href="'https://www.instagram.com/shoutout.jetzt/'" target="_blank">
            <img src="/instagram.png" alt="facebook" height="20" class="content__icon">
          </a>
        </div>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.content {
  &__wrapper {
    width: 75%;
    @media screen and (min-width: 600px) {
      margin-bottom: 20px;
    }
  }
  &__headline {
    font-family: theRambler;
    font-size: 9vw;
    @media screen and (min-width: 600px) {
      font-size: 11vw;
    }
    @media screen and (min-width: 960px) {
      font-size: 100px;
    }
    @media screen and (min-width: 1264px) {
      font-size: 108px;
    }
    @media screen and (min-width: 1904px) {
      font-size: 135px;
    }
  }
  &__desc {
    font-size: 2vw;
    @media screen and (min-width: 960px) {
      font-size: 19px;
    }
    @media screen and (min-width: 1904px) {
      font-size: 23px;
    }
  }
  &__icon {
    height: 2vw;
    @media screen and (min-width: 600px) {
      margin-top: 20px;
    }
    @media screen and (min-width: 1264px) {
      margin-top: 20px;
    }
    @media screen and (min-width: 1904px) {
      height: 40px;
    }
  }
}
</style>
