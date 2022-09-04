import Vue from "vue";
import Layout from "@/views/common/layout";
import VueRouter from "vue-router";
import PageLayout from "@/views/common/page-layout";
import Login from "@/views/login/login-page";
import { permissions } from "@/config/permission.config";
import NotFound from "@/views/error/not-found";
import NotAllowed from "@/views/error/not-allowed";

Vue.use(VueRouter);

const menuRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    meta: {
      title: "控制台",
      icon: "dashboard",
      permission: permissions.DASHBOARD,
    },
    component: () => import("@/views/dashboard/dashboard.vue"),
  },
  {
    path: "users",
    name: "user",
    meta: { title: "用户", icon: "user", permission: permissions.USER },
    component: PageLayout,
    children: [
      {
        name: "user-list",
        path: "list",
        meta: {
          title: "用户管理",
          icon: "usergroup",
          permission: permissions.USER_LIST,
        },
        component: () => import("@/views/user/user-list.vue"),
      },
    ],
  },
];
export const menuRootName = "menuRoot";
export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    name: menuRootName,
    children: [...menuRoutes],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  { path: "/404", component: NotFound, name: "notFound" },
  {
    path: "/403",
    component: NotAllowed,
    name: "notAllowed",
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const createRouter = () => {
  return new VueRouter({
    routes,
  });
};

export const resetRouter = () => {
  const newRouter = createRouter();
  router.macher = newRouter.macher;
};
const router = createRouter();

export default router;
