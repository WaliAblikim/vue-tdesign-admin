import tokenApi from "@/api/token.js";
import { MessagePlugin } from "tdesign-vue";
import storage from "@/utils/storage.js";
import { resetRouter } from "@/router";

export const actions = {
  async login({ commit }, { username, password }) {
    const token = await tokenApi.create({ username, password });
    if (token) {
      commit("SET_TOKEN", token);
      storage.set("token", token);
      resetRouter();
      await MessagePlugin.success("登录成功！");
    }
  },
  async logout({ commit }) {
    commit("CLEAR_TOKEN");
    commit("user/CLEAR_CURRENT_USER");
    commit("permission/CLEAR_ROUTES");
    storage.remove("token");
    storage.remove("currentUser");
    storage.remove("permissionRoutes");
    resetRouter();
  },
};
