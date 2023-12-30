<template>
  <div class="footer">
    <v-footer absolute color="transparent">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            class="d-flex justify-center align-center"
            style="gap: 15px"
          >
            <a :href="social.link" v-for="(social, i) in socialMedia" :key="i">
              <v-icon size="37" color="#fff">{{ social.icon }}</v-icon>
            </a>
          </v-col>
          <v-col cols="12">
            <p style="color: #ced9ef; font-size: 18px; line-height: normal">
              &copy; {{ new Date().getFullYear() }} Braa Refaat, All rights
              reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const socialMedia = ref([
  {
    icon: "mdi-facebook",
    link: "https://www.facebook.com/braarefaat/",
  },
  {
    icon: "mdi-twitter",
    link: "https://twitter.com/BRefaat77",
  },
  {
    icon: "mdi-github",
    link: "https://github.com/BraaRefaat",
  },
  {
    icon: "mdi-linkedin",
    link: "https://www.linkedin.com/in/braa-refaat-315557247/",
  },
  {
    icon: "mdi-whatsapp",
    link: "https://wa.me/+201064130799",
  },
]);
</script>

<style lang="scss" scoped>
a {
  width: fit-content;
  .v-icon {
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    &:hover {
      color: #97ab00 !important;
      transform: scale(1.2);
    }
  }
}
</style>
