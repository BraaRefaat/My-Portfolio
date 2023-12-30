<template>
  <div class="app-layout" style="overflow-x: hidden">
    <v-layout class="d-block">
      <navDrawer />
      <v-main
        :style="`margin-top: ${windowWidth <= 1074 ? '120px' : '180px'};`"
      >
        <slot></slot>
      </v-main>
      <appNav v-show="windowWidth > 1074" />
      <responsiveNav v-show="windowWidth <= 1074" />
      <appFooter />
    </v-layout>
  </div>
</template>

<script setup>
import appNav from "@/components/global/appNav.vue";
import appFooter from "@/components/global/appFooter.vue";
import responsiveNav from "@/components/global/responsiveNav.vue";
import navDrawer from "@/components/global/navDrawer.vue";
import { ref, onMounted } from "vue";

const windowWidth = ref(0);
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
  };
});
</script>
