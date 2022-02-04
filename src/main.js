import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/styles/main.scss";
import VModal from "vue-js-modal";
import typograf from "./utils/filters";
import vSelect from "vue-select";
import Vuelidate from "vuelidate";
import VueScrollactive from "vue-scrollactive";
import VueTheMask from "vue-the-mask";
import "vue-select/src/scss/vue-select.scss";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/dist/fullpage.css";
import VTooltip from "v-tooltip";
import VueSmoothScroll from "vue2-smooth-scroll";
import VueGtm from "@gtm-support/vue2-gtm";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'


Vue.use(VTooltip);
Vue.filter("text", typograf);
Vue.use(VueFullPage);
Vue.use(VueSmoothScroll);
Vue.component("v-select", vSelect);
Vue.use(VueScrollactive);
Vue.use(VueTheMask);
Vue.use(VModal);
Vue.use(Vuelidate);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
