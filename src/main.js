import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue";
import "tdesign-vue/dist/reset.css";
import "tdesign-vue/es/style/index.css";
Vue.use(TDesign);
Vue.config.productionTip = false;

process.env.NODE_ENV === "development" && require("./mock");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
