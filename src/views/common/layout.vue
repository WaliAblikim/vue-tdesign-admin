<template>
  <div class="main">
    <t-layout
      ><sidebar :collapsed="collapsed"></sidebar>
      <t-layout>
        <t-header
          ><Header
            :collapsed="collapsed"
            @on-toggle-collapsed="toggleCollapsed"
          ></Header
        ></t-header>
        <t-content><router-view /></t-content>
        <t-footer>底部区域</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script>
import Sidebar from "@/views/common/sidebar";
import Header from "@/views/common/header";

export default {
  name: "Layout",
  components: { Sidebar, Header },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed(collapsed) {
      this.collapsed = collapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
}
</style>
