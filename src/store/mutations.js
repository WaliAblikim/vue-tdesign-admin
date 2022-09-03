export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = "";
  },
};
