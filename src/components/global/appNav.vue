<template>
  <div class="app-nav">
    <v-layout>
      <v-app-bar
        color="#233d4d"
        class="position-fixed"
        elevation="0"
        height="100"
      >
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-lazy transition="fade-transition">
                <img src="../../assets/images/logo-3.png" width="150" alt="" />
              </v-lazy>
            </v-col>

            <v-col cols="2"></v-col>
            <v-col cols="8" class="my-auto">
              <v-list
                class="d-flex justify-space-between align-center bg-transparent"
              >
                <v-list-item v-for="link in links" :key="link.to">
                  <router-link :to="link.to">{{ link.title }}</router-link>
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
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Services",
    to: "/services",
  },
  {
    title: "Skills",
    to: "/skills",
  },
  {
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    title: "Contact",
    to: "/contact",
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
    a,
    router-link,
    .router-link-active {
      color: #fff;
      line-height: 2;
      text-decoration: none;
      position: relative;
      cursor: url(../../assets/images/pointer.png), auto;
    }
    &::before {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background-color: #fe7f2d;
      position: absolute;
      bottom: -0.25rem;
      left: 50%;
      transition: width 0.4s, left 0.4s;
    }
    &:hover::before {
      width: 100%;
      left: 0;
    }
  }
}
</style>
