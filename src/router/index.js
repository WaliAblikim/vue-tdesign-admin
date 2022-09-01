import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/common/layout";
import PageLayout from "@/views/common/page-layout";
import Login from "@/views/login/login-page";

Vue.use(VueRouter);

export const menuRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    meta: { title: "控制台", icon: "dashboard" },
    component: () => import("@/views/dashboard/dashboard.vue"),
  },
  {
    path: "users",
    name: "user",
    meta: { title: "用户", icon: "user" },
    component: PageLayout,
    children: [
      {
        name: "user-list",
        path: "list",
        meta: {
          title: "用户管理",
          icon: "usergroup",
        },
        component: () => import("@/views/user/user-list.vue"),
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    children: [...menuRoutes],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
