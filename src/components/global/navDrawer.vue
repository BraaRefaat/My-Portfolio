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
          <v-list-item v-for="link in links" :key="link.to" class="mb-4">
            <v-list-title>
              <router-link :to="link.to" @click="drawer = false">
                {{ link.title }}
              </router-link>
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
  .v-btn {
    cursor: url(../../assets/images/pointer.png), auto;
    .v-icon {
      cursor: url(../../assets/images/pointer.png), auto;
    }
  }
  .v-list-item {
    color: #fff;
    cursor: url(../../assets/images/pointer.png), auto;
    font-size: 1rem;
    font-weight: 600;
    width: fit-content;
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
