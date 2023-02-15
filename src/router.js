import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeView from "@/pages/HomeView";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
