<template>
  <div class="res-nav">
    <v-app-bar color="#0a191e" class="position-fixed" elevation="0" height="85">
      <v-container>
        <v-row>
          <v-col cols="8" class="d-flex justify-start align-center">
            <v-lazy transition="fade-transition">
              <img
                src="../../assets/images/logo-2.png"
                style="width: 90px"
                alt=""
              />
            </v-lazy>
          </v-col>
          <v-col cols="4" class="d-flex justify-end align-center">
            <v-app-bar-nav-icon
              color="#97ab00"
              variant="text"
              style="font-size: 20px"
              @click="openNav"
            ></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
import { inject } from "vue";
const Emitter = inject("Emitter");
const openNav = () => {
  Emitter.emit("openNav");
};
</script>

<style lang="scss" scoped>
img {
  transform: scale(1.4);
  transition: 0.3s;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
}
</style>
