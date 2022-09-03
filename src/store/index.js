import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import { actions } from "./actions.js";
import { mutations } from "./mutations.js";
import storage from "@/utils/storage.js";
import user from "@/api/user.js";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// const modules = {};
// const files = require.context("./modules", false, /\.js$/);
// files.keys().forEach((key) => {
//   modules[key.replace(/(modules|\/|\.|js)/g, "")] = {
//     ...files(key).default,
//   };
// });
const state = () => ({ token: storage.get("token") });

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
