<template>
  <div class="app-nav">
    <v-layout>
      <v-app-bar
        color="#0a191e"
        class="position-fixed"
        elevation="0"
        height="100"
      >
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-lazy transition="fade-transition">
                <img src="../../assets/images/logo-2.png" width="150" alt="" />
              </v-lazy>
            </v-col>

            <v-col cols="2"></v-col>
            <v-col cols="8" class="my-auto">
              <v-list
                class="d-flex justify-space-between align-center bg-transparent"
              >
                <v-list-item v-for="link in links" :key="link.target">
                  <a :href="link.target">{{ link.title }}</a>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
    </v-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
const links = ref([
  {
    title: "Home",
    target: "#",
    event: () => {
      scrollTo(0, 0);
    },
  },
  {
    title: "About",
    target: "#about-section",
  },
  {
    title: "Services",
    target: "#services-section",
  },
  {
    title: "Skills",
    target: "#skills-section",
  },
  {
    title: "Portfolio",
    target: "#portfolio-section",
  },
  {
    title: "Contact",
    target: "#contact-section",
  },
]);
</script>

<style lang="scss">
.app-nav {
  img {
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .v-list-item {
    a {
      color: #fff;
      line-height: 2;
      text-decoration: none;
      position: relative;
    }
    &::before {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background-color: #97ab00;
      position: absolute;
      bottom: -0.25rem;
      left: 50%;
      transition: width 0.4s, left 0.4s;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover::before {
      width: 100%;
      left: 0;
    }
  }
}
</style>
