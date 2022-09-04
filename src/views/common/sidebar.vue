<template>
  <t-aside :width="collapsed ? '64px' : '232px'">
    <div class="menu">
      <t-menu :collapsed="collapsed" :defaultValue="$route.name">
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
import SidebarItem from "@/components/SidebarItem";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: { SidebarItem },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["menuRoutes"]),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100vh;
}
</style>
