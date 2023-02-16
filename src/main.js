import Vue from "vue";
import App from "./App.vue";
import router from "./routes.js";
import store from "./store.js";

import "@/filters.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
