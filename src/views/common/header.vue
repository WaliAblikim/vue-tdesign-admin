<template>
  <div class="header">
    <t-button @click="toggleCollapsed" shape="circle" variant="text"
      ><menu-fold-icon v-if="collapsed" slot="icon" />
      <menu-unfold-icon v-if="!collapsed" slot="icon" />
    </t-button>
    <div class="operation-area">
      <t-dropdown
        @click="handleDropdownClick"
        :options="[{ content: '退出登录', value: 'logout' }]"
      >
        <t-button variant="text" shape="circle" size="large"
          ><t-avatar size="large">wali</t-avatar></t-button
        ></t-dropdown
      >
    </div>
  </div>
</template>

<script>
import { MenuFoldIcon, MenuUnfoldIcon } from "tdesign-icons-vue";
import { mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    MenuFoldIcon,
    MenuUnfoldIcon,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(["logout"]),
    toggleCollapsed() {
      this.$emit("on-toggle-collapsed", !this.$props.collapsed);
    },
    async handleDropdownClick(data) {
      switch (data.value) {
        case "logout":
          await this.logout();
          await this.$router.push(`/login?redirect=${this.$route.fullPath}`);
          break;
        default:
          throw new Error("该指令无设置任何操作");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
