import router from "@/router/index.js";
import store from "@/store/index.js";

const whiteList = ["/login", "/403", "/404"];

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
  const hasPermissions = store.getters.permissionRoutesNameList.includes(
    to.name
  );

  if (!hasPermissions && whiteList.indexOf(to.path) === -1) {
    next({ path: "/403" });
  }
  next();
});
