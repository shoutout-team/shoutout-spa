<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <h1 class="display-2 mb-3 font-weight-thin">
          shoutout.
          <span class="kritzel-wrapper">
            jetzt
            <img
              src="~/assets/kritzel.png"
              class="kritzel"
            >
          </span>
          <span class="font-weight-black">bald</span>
        </h1>
        <img
          src="~/assets/wirsinddran.png"
          alt="Wir sind dran"
          class="index-image mb-10"
        >
        <p class="font-weight-bold">
          Ihr braucht ein Shoutout oder wollt shoutouten?
        </p>
        <p class="mb-10">Dann lasst uns eure E-Mail Adresse da und wir schicken euch eine Benachrichtigung, sobald wir live sind.</p>
        <!-- Begin Mailchimp Signup Form -->
      </v-col>
      <v-col cols="12" md="4" lg="4" justify-self="right">
        <div class="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/WgSPyhn-6Gg?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <div id="mc_embed_signup">
          <form
            id="mc-embedded-subscribe-form"
            action="https://jetzt.us19.list-manage.com/subscribe/post?u=302cdd14aadcf8513d7086d26&amp;id=15cdd750e4"
            method="post"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <v-flex class="d-md-flex fillheight mb-md-12">
                <v-text-field
                  id="mce-EMAIL"
                  type="email"
                  value=""
                  outlined
                  tile
                  color="#000"
                  name="EMAIL"
                  label="Deine E-Mail Adresse"
                  class="required email mr-3"
                />
                <v-btn
                  id="mc-embedded-subscribe"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  dark
                  height="56"
                  color="#000"
                  tile
                  x-large
                  class="align-self-auto mb-10 mb-md-0"
                >
                  Ab auf die Liste
                </v-btn>
              </v-flex>
              <p>Bis dahin gebt uns ein shoutout, liked, teilt und folgt uns, damit wir möglichst viele Menschen erreichen.</p>
              <p class="mb-12">
                <nuxt-link to="/start" class="font-weight-bold">Hier</nuxt-link> geht es zu unserem Prototypen den wir für den wirvsvirus Hackathon erarbeitet haben.
              </p>
              <div id="mce-responses" class="clear">
                <div id="mce-error-response" class="response" style="display:none" />
                <div id="mce-success-response" class="response" style="display:none" />
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_302cdd14aadcf8513d7086d26_15cdd750e4" tabindex="-1" value="">
              </div>
            </div>
          </form>
        </div>
        <!--End mc_embed_signup-->
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
 .index-image {
   width: 260px;

   @media (min-width: 1024px) {
     transform: translateX(-20px);
   }
 }
 .kritzel-wrapper {
   display: inline-block;
   position: relative;
   overflow: visible;
 }

 .kritzel {
   position: absolute;
   top: 20%;
   left: 0;
   width: 100%;
 }

 .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 0;
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
