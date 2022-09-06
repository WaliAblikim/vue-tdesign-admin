<template>
  <t-card>
    <t-row>
      <t-button @click="handleCreate">创建角色</t-button>
    </t-row>
    <t-table row-key="index" :data="roles" :columns="columns">
      <template #operation="slotProps">
        <t-button variant="text" theme="primary" @click="handleEdit(slotProps)"
          ><icon name="edit"></icon>编辑</t-button
        >
        <t-button variant="text" theme="danger"
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
import RoleEditDialog from "@/views/user/role-edit-dialog";

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
    };
  },
  methods: {
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
