<template>
  <div id="portfolio-section" class="d-flex justify-center align-center">
    <v-container style="height: 100%" class="mx-0 mb-16">
      <v-row>
        <v-col cols="12" class="mb-8" data-aos="fade-down">
          <button class="button mb-8" data-text="Awesome">
            <span class="actual-text">&nbsp;Portfolio&nbsp;</span>
            <span aria-hidden="true" class="hover-text"
              >&nbsp;Portfolio&nbsp;</span
            >
          </button>
          <p style="color: #ced9ef; font-size: 18px; line-height: normal">
            Discover my world of creativity through a collection of handpicked
            projects. From sleek websites to captivating web applications, my
            portfolio showcases a blend of design finesse and technical skill.
            Explore these digital experiences, each crafted with precision and
            innovation, offering a glimpse into my dedication to creating
            seamless, user-centric online solutions.
          </p>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-row class="d-flex justify-center align-center">
            <v-col
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
              style="width: fit-content"
              v-for="(project, i) in projects"
              :key="i"
              data-aos="fade-up"
              class="d-flex justify-center align-center"
            >
              <v-card variant="flat" color="transparent" class="py-0 px-0">
                <div class="img-parent">
                  <img
                    :src="require(`@/assets/images/${project.image}`)"
                    alt=""
                  />
                  <div class="overlay"></div>
                  <a :href="project.link" target="_blank">
                    <v-btn
                      variant="outlined"
                      color="#233d4d"
                      density="compact"
                      width="60"
                      height="60"
                      class="view-btn"
                    >
                      <v-icon size="30">mdi-eye</v-icon>
                    </v-btn>
                  </a>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
const projects = ref([
  {
    image: "elrehab-website.png",
    link: "https://electronic-shop-demo.netlify.app/",
  },
  {
    image: "graduation-website.png",
    link: "https://graduation-platform.netlify.app/",
  },
  {
    image: "restaurant-website.png",
    link: "https://burger-restaurant-temp.netlify.app/",
  },
  {
    image: "cruds-website.png",
    link: "https://cruds-temp.netlify.app/",
  },
  {
    image: "youtube-clone.png",
    link: "https://youtube-clone-temp.netlify.app/",
  },
  {
    image: "photo-editor.png",
    link: "https://photo-editor-temp.netlify.app/",
  },
  {
    image: "scroll-website.png",
    link: "https://scrolling-website-temp.netlify.app/",
  },
  {
    image: "portfolio-website.png",
    link: "https://portfolio-website-temp.netlify.app/",
  },
]);
</script>

<style lang="scss">
#portfolio-section {
  .v-card {
    width: fit-content;
    margin-bottom: 10px;
  }
  .img-parent {
    position: relative;
    display: inline-block;
    height: 250px;
    img {
      width: 350px;
      height: 250px;
      border-radius: 20px;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background-color: #fe7f2d;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .view-btn {
      background-color: transparent !important;
      text-transform: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      letter-spacing: normal;
      font-size: 13px;
      border-radius: 20px;
      transition: 0.3s all ease-in-out;
      opacity: 0;
      &:hover {
        border-radius: 30px;
        background-color: #233d4d !important;
        .v-icon {
          color: #fe7f2d;
        }
      }
    }
    &:hover {
      .view-btn,
      .overlay {
        opacity: 1 !important;
      }
    }
  }
}
</style>
