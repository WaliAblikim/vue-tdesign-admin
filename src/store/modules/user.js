import userApi from "@/api/user.js";
import storage from "@/utils/storage.js";

const defaultUser = storage.get("currentUser") || {
  username: "",
  nickname: "",
  roles: [],
};
const state = () => defaultUser;
const actions = {
  async fetchCurrentUserInfo({ commit }) {
    const currentUser = await userApi.me();
    storage.set("currentUser", currentUser);
    commit("SET_CURRENT_USER", currentUser);
  },
};
const mutations = {
  SET_CURRENT_USER(state, currentUser) {
    state.username = currentUser.username;
    state.nickname = currentUser.nickname;
    state.roles = currentUser.roles;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
