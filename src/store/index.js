import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach((key) => {
  modules[key.replace(/(modules|\/|\.|js)/g, "")] = {
    ...files(key).default,
  };
});
const state = () => ({ token: null });

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
