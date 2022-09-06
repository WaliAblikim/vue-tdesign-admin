import Vue from "vue";
import store from "@/store/index.js";

const checkPermission = (el, binding) => {
  const { value } = binding;
  const permissionList = store.getters.userPermissions;

  if (typeof value === "string" && value) {
    !permissionList.includes(value) &&
      el.parentNode &&
      el.parentNode.removeChild(el);
  } else {
    throw new Error(
      `需要权限集设定，权限集设定只接受字符串，例如：v-permission="'dashboard'"`
    );
  }
};

Vue.directive("permission", {
  inserted(el, binding) {
    checkPermission(el, binding);
  },
  update(el, binding) {
    checkPermission(el, binding);
  },
});
