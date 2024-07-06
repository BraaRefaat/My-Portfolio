<template>
  <div id="about-section">
    <v-container
      class="d-flex justify-center align-center text-start"
      style="height: 150vh"
    >
      <v-row>
        <v-col cols="12" sm="12" md="5" lg="5" xl="5" data-aos="fade-right">
          <div class="img-parent d-flex justify-center align-center">
            <img
              src="../../assets/images/Me-image.png"
              style="width: 90%; border-radius: 10px"
              alt=""
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="7"
          lg="7"
          xl="7"
          data-aos="fade-left"
          class="d-flex justify-center align-center mt-8"
        >
          <div class="parent d-flex flex-column align-start">
            <button class="button mb-8" data-text="Awesome">
              <span class="actual-text">&nbsp;About&nbsp;</span>
              <span aria-hidden="true" class="hover-text"
                >&nbsp;About&nbsp;</span
              >
            </button>
            <p style="color: #ced9ef; font-size: 18px; line-height: normal">
              Hey there! I'm Braa Refaat, I'm Egyptian, a dedicated front-end
              developer with a passion for creating visually stunning and
              user-friendly websites. With a blend of creativity and coding
              skills, I specialize in turning ideas into seamless online
              experiences.Proficient in HTML, CSS, JavaScript, Bootstrap,
              Tailwind CSS, SASS, Vue js, and modern libraries and frameworks.
              Let's collaborate and bring your digital vision to life!
            </p>

            <button class="btn mt-8" @click="uploadCv">Download CV</button>
          </div>
        </v-col>
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

const uploadCv = () => {
  window.open(
    "https://drive.google.com/file/d/1k5F_lH-o36J4zEyk5fWUPow7J3BBTpCV/view?usp=drive_link"
  );
};
</script>

<style lang="scss" scoped>
@media (max-width: 960px) {
  .parent {
    align-items: center !important;
    text-align: center;
  }
}
</style>
