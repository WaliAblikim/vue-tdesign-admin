<template>
  <t-aside :width="collapsed ? '64px' : '232px'">
    <div class="menu">
      <t-menu :collapsed="collapsed">
        <sidebar-item
          v-for="item in menuRoutes"
          v-bind:key="item.name"
          :item="item"
        ></sidebar-item>
      </t-menu>
    </div>
  </t-aside>
</template>
<script>
import { menuRoutes } from "@/router/index";
import SidebarItem from "@/components/SidebarItem";

export default {
  name: "Sidebar",
  components: { SidebarItem },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuRoutes,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100vh;
}
</style>
