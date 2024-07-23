<template>
  <div id="contact-section">
    <v-container style="height: 150vh">
      <v-row>
        <v-col cols="12" class="px-16 mb-4" data-aos="zoom-out">
          <button class="button mb-8" data-text="Awesome">
            <span class="actual-text">&nbsp;Contact&nbsp;</span>
            <span aria-hidden="true" class="hover-text"
              >&nbsp;Contact&nbsp;</span
            >
          </button>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="7"
          lg="7"
          xl="7"
          class="contact-col text-start"
          data-aos="zoom-in-left"
        >
          <h1 style="font-size: 60px">Let's Build Something Great Together!</h1>
          <span style="font-size: 60px">&#129309;</span>
          <p style="color: #ced9ef; font-size: 18px; line-height: normal">
            I'm always looking for new opportunities to collaborate with
            talented people and build innovative web applications. If you have a
            project in mind, please don't hesitate to contact me. I'm happy to
            discuss your requirements and see if I can help.
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="1" lg="1" xl="1"></v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" data-aos="zoom-in-right">
          <form action="https://formspree.io/f/xdorvnzo" method="POST">
            <v-responsive class="mx-auto my-5" max-width="344">
              <v-text-field
                variant="solo-filled"
                label="Name"
                name="Name"
                hide-details="auto"
                required
              ></v-text-field>
            </v-responsive>
            <v-responsive class="mx-auto my-8" max-width="344">
              <v-text-field
                variant="solo-filled"
                hide-details="auto"
                label="Email"
                name="email"
                placeholder="example@gmail.com"
                type="email"
                required
              ></v-text-field>
            </v-responsive>
            <v-responsive
              class="mx-auto my-8"
              max-width="344"
              style="border-radius: 20px"
              ><v-textarea
                variant="solo-filled"
                clearable
                label="Message"
                name="message"
                required
              ></v-textarea
            ></v-responsive>
            <button class="btn" type="submit">Send Message</button>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
#contact-section {
  .v-field {
    border-radius: 20px;
  }
}

.btn {
  --color: #fe7f2d;
  --color2: #233d4d;
  padding: 0.8em 1.75em;
  background-color: transparent;
  border-radius: 30px;
  border: 0.3px solid var(--color);
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  font-weight: 500;
  font-size: 18px;
  color: var(--color);
  &::after,
  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: var(--color);
  }
  &::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
  }
  &:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
  }
  &:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
  }
  &:hover {
    color: var(--color2);
  }
  &:active {
    filter: brightness(0.7);
    transform: scale(0.98);
  }
}

@media (max-width: 960px) {
  #contact-section {
    .contact-col {
      text-align: center !important;
      h1 {
        font-size: 50px !important;
      }
      span {
        font-size: 50px !important;
      }
    }
  }
}
</style>
