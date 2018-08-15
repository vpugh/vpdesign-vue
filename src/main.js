import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import test from "./styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  test,
  render: h => h(App)
}).$mount("#app");
