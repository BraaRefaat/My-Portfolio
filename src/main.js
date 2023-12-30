import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "vue3-particles";

// Emitter
import mitt from "mitt";
const Emitter = mitt();

// Vue-writer
import VueWriter from "vue-writer";

// Aos
import "aos/dist/aos.css";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .provide("Emitter", Emitter)
  .use(vuetify)
  .use(VueWriter)
  .use(Particles)
  .use(router)
  .mount("#app");
