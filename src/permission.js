import router from "@/router/index.js";
import store from "@/store/index.js";

const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  const hasToken = store.state.token;

  if (!hasToken) {
    whiteList.indexOf(to.path) !== -1
      ? next()
      : next(`login?redirect=${to.path}`);
  }

  if (hasToken && to.path === "/login") {
    next({ path: "/" });
  }
  next();
});
