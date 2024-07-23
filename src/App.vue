<template>
  <div>
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#233d4d',
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#fe7f2d',
          },
          links: {
            color: '#fe7f2d',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 6,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
  <app-layout>
    <router-view />
    <v-btn
      class="scroller"
      variant="outlined"
      :ripple="false"
      color="#fe7f2d"
      @click="scrollToStart"
      v-on:scroll="scrollY"
      style="
        position: fixed;
        right: 15px;
        bottom: 50px;
        z-index: 999;
        border-radius: 30%;
        height: 60px;
        width: 60px;
      "
      v-show="showScroller"
      ><v-icon color="#fe7f2d" size="37">mdi-chevron-up</v-icon></v-btn
    >
  </app-layout>
</template>

<script setup>
import appLayout from "@/components/global/appLayout.vue";
import { loadSlim } from "tsparticles-slim";
import { ref } from "vue";

const particlesInit = async (engine) => {
  //await loadFull(engine);
  await loadSlim(engine);
};

const showScroller = ref(false);
const scrollToStart = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
window.onscroll = () => {
  if (window.scrollY >= 500) {
    showScroller.value = true;
  } else {
    showScroller.value = false;
  }
};
</script>

<style lang="scss">
#app {
  font-family: cairo;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .scroller {
    background-color: #fe7f2d17 !important;
    transition: 0.3s all ease-in-out !important;
    border: 2px solid transparent !important;
    &:hover,
    &:focus {
      border-radius: 50% !important;
      border: 2px solid #fe7f2d !important;
    }
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  width: 8px;
  background-color: #233d4d;
}

::-webkit-scrollbar-thumb {
  background: #fe7f2d;
  border-radius: 30px;
  width: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d26a25;
}
</style>
