import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeView from "@/pages/HomeView";
import AboutView from "@/pages/AboutView";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/:number",
    component: AboutView,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/") {
    let pkmNumber = to.path.slice(1);
    !pkmNumber.match(/\D/g) ? next() : next("/");
  } else {
    next();
  }
});

export default router;
