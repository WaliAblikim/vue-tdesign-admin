import { routes } from "@/router";
import storage from "@/utils/storage";

const state = {
  routes: storage.get("permissionRoutes"),
};

const actions = {
  generateRoutes({ commit }, permissions, admin = false) {
    let accessedRoutes = admin ? routes : filterRoutes(routes, permissions);
    storage.set("permissionRoutes", accessedRoutes);
    commit("SET_ROUTES", accessedRoutes);
  },
};

const filterRoutes = (routes, permissions) => {
  return routes.filter((route) => {
    if (route.children) {
      route.children = filterRoutes(route.children, permissions);
    }
    return (
      !route.meta ||
      (route.meta &&
        (!route.meta.permission ||
          (route.meta.permission &&
            permissions.includes(route.meta.permission))))
    );
  });
};

const mutations = {
  SET_ROUTES(state, routes) {
    state.routes = routes;
  },
  CLEAR_ROUTES(state) {
    state.routes = [];
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
