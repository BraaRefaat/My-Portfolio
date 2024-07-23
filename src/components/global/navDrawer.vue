<template>
  <div class="nav-drawer">
    <v-navigation-drawer
      class="px-5"
      location="right"
      v-model="drawer"
      color="#233d4d"
      width="220"
      style="height: fit-content"
    >
      <v-card elevation="0" color="#233d4d" class="px-0 mt-5">
        <v-btn
          @click="drawer = false"
          elevation="0"
          size="40"
          color="#fe7f2d"
          variant="text"
          style="border-radius: 50%"
          ><v-icon size="27">mdi-close</v-icon></v-btn
        >
        <v-list class="d-flex justify-center align-center flex-column">
          <v-list-item v-for="link in links" :key="link.target" class="mb-4">
            <v-list-title>
              <a :href="link.target">{{ link.title }}</a>
            </v-list-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";

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
const drawer = ref(false);
const Emitter = inject("Emitter");

onMounted(() => {
  Emitter.on("openNav", () => {
    drawer.value = true;
  });
});
</script>

<style lang="scss" scoped>
.nav-drawer {
  .v-list-item {
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    width: fit-content;
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
      background-color: #fe7f2d;
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
