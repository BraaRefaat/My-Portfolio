<template>
  <div id="services-section">
    <v-container
      style="height: 100vh"
      class="d-flex justify-center align-center mb-16"
    >
      <v-row class="d-flex justify-center align-center">
        <v-col cols="12" data-aos="fade-down">
          <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;Services&nbsp;</span>
            <span aria-hidden="true" class="hover-text"
              >&nbsp;Services&nbsp;</span
            >
          </button>
        </v-col>
        <v-row class="d-flex justify-center align-center mt-8">
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
            class="card-col"
            data-aos="flip-right"
          >
            <v-hover>
              <template v-slot="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  variant="flat"
                  color="#162631"
                  height="fit-content"
                  class="py-5 px-5"
                  :style="`border: ${
                    isHovering ? '2px #fe7f2d solid' : '2px transparent solid'
                  }; transition: 0.3s all ease-in-out`"
                >
                  <v-container class="flex-column justify-center align-center">
                    <v-icon color="#fe7f2d" size="37">mdi-web</v-icon>
                    <v-card-title class="px-0 font-weight-bold text-h5">
                      Web Development
                    </v-card-title>
                    <v-card-text
                      style="color: #f2f4f3; font-size: 18px; line-height: 40px"
                    >
                      Build dynamic and interactive web applications.
                    </v-card-text>
                  </v-container>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
            class="card-col"
            data-aos="flip-right"
          >
            <v-hover>
              <template v-slot="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  variant="flat"
                  color="#162631"
                  height="fit-content"
                  class="py-5 px-5"
                  :style="`border: ${
                    isHovering ? '2px #fe7f2d solid' : '2px transparent solid'
                  }; transition: 0.3s all ease-in-out`"
                >
                  <v-container class="flex-column justify-center align-center">
                    <v-icon color="#fe7f2d" size="37">mdi-responsive</v-icon>
                    <v-card-title class="px-0 font-weight-bold text-h5">
                      Website Design
                    </v-card-title>
                    <v-card-text
                      style="color: #f2f4f3; font-size: 18px; line-height: 40px"
                    >
                      Create responsive and visually appealing layouts.
                    </v-card-text>
                  </v-container>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
            class="card-col"
            data-aos="flip-right"
          >
            <v-hover>
              <template v-slot="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  variant="flat"
                  color="#162631"
                  height="fit-content"
                  class="py-5 px-5"
                  :style="`border: ${
                    isHovering ? '2px #fe7f2d solid' : '2px transparent solid'
                  }; transition: 0.3s all ease-in-out`"
                >
                  <v-container class="flex-column justify-center align-center">
                    <v-icon color="#fe7f2d" size="37">mdi-bug-check</v-icon>
                    <v-card-title class="px-0 font-weight-bold text-h5">
                      Performance Optimization
                    </v-card-title>
                    <v-card-text
                      style="color: #f2f4f3; font-size: 18px; line-height: 40px"
                    >
                      Improve loading speed and responsiveness.
                    </v-card-text>
                  </v-container>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style lang="scss">
.button {
  /* === removing default button style ===*/
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: context-menu;

  /* button styling */
  --border-right: 6px;
  --text-stroke-color: #fff;
  --animation-color: #fe7f2d;
  --fs-size: 2em;
  --fs-weight: bold;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-weight: var(--fs-weight);
  position: relative;
  text-transform: uppercase;
  color: var(--text-stroke-color);
  &:hover {
    .hover-text {
      width: 100%;
      filter: drop-shadow(0 0 23px var(--animation-color));
    }
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    font-weight: var(--fs-weight);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
  }
}

@media (max-width: 960px) {
  .card-col {
    padding: 12px 28px !important;
  }
}
</style>
