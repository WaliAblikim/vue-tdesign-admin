import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue";
import "./permission.js";
import "tdesign-vue/dist/reset.css";
import "tdesign-vue/es/style/index.css";
import store from "./store";
import "./directive/permission.js";
import "@/assets/style/base.scss";
import { charts } from "@jiaminghi/data-view";

Vue.use(TDesign);
Vue.use(charts);
Vue.config.productionTip = false;

// process.env.NODE_ENV === "development" && require("./mock");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
