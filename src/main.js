import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue";
import "./permission.js";
import "tdesign-vue/dist/reset.css";
import "tdesign-vue/es/style/index.css";
import store from "./store";
import "./directive/permission.js";

Vue.use(TDesign);
Vue.config.productionTip = false;

// process.env.NODE_ENV === "development" && require("./mock");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
