<template>
  <t-card>
    <t-row>
      <t-button
        v-permission="permissions.USER_ROLES_CREATE"
        @click="handleCreate"
        >创建角色</t-button
      >
    </t-row>
    <t-table
      row-key="index"
      :data="roles"
      :columns="columns"
      :pagination="paging"
    >
      <template #operation="slotProps">
        <t-button
          v-permission="permissions.USER_ROLES_EDIT"
          variant="text"
          theme="primary"
          @click="handleEdit(slotProps)"
          ><icon name="edit"></icon>编辑</t-button
        >
        <t-button
          v-permission="permissions.USER_ROLES_DELETE"
          variant="text"
          theme="danger"
          ><icon name="delete"></icon>删除</t-button
        >
      </template>
    </t-table>
    <role-edit-dialog
      :show="showRoleEditDialog"
      :data="editData"
      @close="onClose"
    ></role-edit-dialog>
  </t-card>
</template>

<script>
import { Icon } from "tdesign-icons-vue";
import RoleEditDialog from "@/views/user/role-edit-dialog.vue";
import roleApi from "@/api/role";
import { permissions } from "@/config/permission.config.js";

export default {
  name: "UserRoles",
  components: {
    RoleEditDialog,
    Icon,
  },
  data() {
    return {
      columns: [
        { colKey: "name", title: "角色名称" },
        { colKey: "label", title: "角色标识" },
        { colKey: "operation", title: "操作" },
      ],
      roles: [
        { name: "ROLE_USER", label: "普通用户" },
        { name: "ROLE_ADMIN", label: "管理员" },
      ],
      showRoleEditDialog: false,
      editData: null,
      paging: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      permissions,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data, paging } = await roleApi.list({});
      this.roles = data;
      this.paging.current = paging.page;
      this.paging.pageSize = paging.size;
      this.paging.total = paging.total;
    },
    handleCreate() {
      this.showRoleEditDialog = true;
    },
    handleEdit({ row }) {
      this.editData = row;
      this.showRoleEditDialog = true;
    },
    onClose() {
      this.showRoleEditDialog = false;
      this.editData = null;
    },
  },
};
</script>

<style scoped></style>
