import tokenApi from "@/api/token.js";
import { MessagePlugin } from "tdesign-vue";

export const actions = {
  async login({ commit }, { username, password }) {
    const token = await tokenApi.create({ username, password });
    if (token) {
      commit("SET_TOKEN", token);
      MessagePlugin.success("登录成功！");
    }
  },
};
