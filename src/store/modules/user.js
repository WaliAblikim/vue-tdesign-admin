import userApi from "@/api/user.js";
import storage from "@/utils/storage.js";

const defaultUser = storage.get("currentUser") || {
  username: "",
  nickname: "",
  roles: [],
  permissions: [],
};
const state = () => defaultUser;
const actions = {
  async fetchCurrentUserInfo({ dispatch, commit }) {
    const currentUser = await userApi.me();
    storage.set("currentUser", currentUser);
    commit("SET_CURRENT_USER", currentUser);
    dispatch("permission/generateRoutes", currentUser.permissions, {
      root: true,
    });
  },
};
const mutations = {
  SET_CURRENT_USER(state, currentUser) {
    state.username = currentUser.username;
    state.nickname = currentUser.nickname;
    state.roles = currentUser.roles;
    state.permissions = currentUser.permission;
  },
  CLEAR_CURRENT_USER(state) {
    state.username = "";
    state.nickname = "";
    state.roles = [];
    state.permissions = [];
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
