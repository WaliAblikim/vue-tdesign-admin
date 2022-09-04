import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import { actions } from "./actions.js";
import { mutations } from "./mutations.js";
import storage from "@/utils/storage.js";
import { menuRootName } from "@/router/index.js";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach((key) => {
  modules[key.replace(/(modules|\/|\.|js)/g, "")] = {
    ...files(key).default,
  };
});

const getters = {
  menuRoutes: (state) =>
    state.permission.routes.length
      ? state.permission.routes.find((item) => item.name === menuRootName)
          .children
      : [],
};

const state = () => ({ token: storage.get("token") });

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});