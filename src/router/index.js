import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WhereToBuy from "../views/WhereToBuy.vue";
import ComingSoon from "../views/ComingSoon.vue";

import { isPortrait, isMobile, getOffset } from "../utils/device";

Vue.use(VueRouter);

const titlePrefix = "Skittles! — ";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/coming-soon",
    component: Home,
    meta: {
      title: titlePrefix + "Главная",
    },
  },
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
    meta: {
      title: titlePrefix + "Акция скоро начнется!",
    },
  },

  {
    path: "/where-to-buy",
    name: "WhereToBuy",
    component: WhereToBuy,
    meta: {
      title: titlePrefix + "Где купить",
    },
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
