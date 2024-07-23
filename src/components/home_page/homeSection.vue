<template>
  <div id="home">
    <v-container fluid style="height: 100vh">
      <v-row>
        <v-col cols="12">
          <VueWriter :array="['Braa Refaat', 'Front End Developer']">
            <h2 style="font-size: 22px; font-weight: 600; color: #fff">
              Hello I'm
            </h2>
          </VueWriter>
        </v-col>
        <v-col cols="12">
          <div class="parent" style="padding: 12px 180px">
            <p
              style="
                color: #f2f4f3;
                font-size: 20px;
                line-height: 40px;
                width: 100%;
              "
            >
              Are you looking to transform your digital presence with stunning
              user interfaces and seamless user experiences? Look no further!
              With Braa Refaat, I'm passionate front-end developer dedicated to
              bringing your ideas to life. With my expertise in cutting-edge
              technologies and creative design, I create web experiences that
              captivate, engage, and delight users.
            </p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="btn-parent" style="padding: 12px 180px">
            <a href="#portfolio-section">
              <button class="btn">View My Work</button>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import VueWriter from "vue-writer";
</script>

<style lang="scss">
.is-typed span.typed {
  color: #fe7f2d;
  font-size: 50px;
  font-weight: 600;
}

.is-typed span.cursor {
  display: inline-block;
  font-size: 40px;
  font-weight: 600;
  width: 4px;
  margin-left: 2px;
  background-color: #fe7f2d;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: #fe7f2d;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
a {
  text-decoration: none;
  color: var(--color);
  width: 100%;
  height: 100%;
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
}

@media (max-width: 960px) {
  .parent,
  .btn-parent {
    padding: 12px 50px !important;
  }
}
@media (max-width: 768px) {
  .parent,
  .btn-parent {
    padding: 12px 20px !important;
  }
}
@media (max-width: 576px) {
  .parent,
  .btn-parent {
    padding: 12px 10px !important;
  }
}
@media (max-width: 480px) {
  .is-typed span.typed {
    font-size: 38px;
  }
  .is-typed span.cursor {
    font-size: 30px;
  }
}
</style>
