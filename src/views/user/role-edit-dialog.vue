<template>
  <t-dialog
    :header="data ? '编辑角色' : '创建角色'"
    :visible.sync="visible"
    width="900px"
    :closeOnOverlayClick="false"
    :closeOnEscKeydown="false"
    @close="$emit('close')"
    @confirm="onSubmit"
  >
    <t-form ref="form" :data="role" :rules="rules">
      <t-form-item label="角色" name="name">
        <t-input placeholder="请输角色名称容" v-model="role.name" />
      </t-form-item>
      <t-form-item label="角色标识" name="label" i>
        <t-input placeholder="请输入角色标识" v-model="role.label" />
      </t-form-item>
      <t-form-item label="权限集" name="permissions">
        <t-tree
          :data="permissionsTree"
          v-model="role.permissions"
          hover
          expand-all
          :checkable="true"
          value-mode="all"
        />
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script>
import { permissionsTree } from "@/config/permission.config";
import roleApi from "@/api/role.js";

export default {
  name: "RoleEditDialog",
  props: {
    show: {
      type: Boolean,
    },
    data: {
      type: Object,
      value: null,
    },
  },
  watch: {
    show: function (value) {
      this.visible = value;
    },
  },
  data() {
    return {
      visible: false,
      role: {
        name: "",
        label: "",
        permissions: [],
      },
      rules: {
        name: [
          { required: true, message: "角色名称不能为空", trigger: "blur" },
        ],
        label: [
          { required: true, message: "角色标识不能为空", trigger: "blur" },
        ],
        permissions: [
          { required: true, message: "请选择角色权限集", trigger: "blur" },
        ],
      },
      permissionsTree,
    };
  },
  methods: {
    async onSubmit() {
      const validated = await this.$refs.form.validate();
      if (validated === true) {
        await roleApi.create(this.role);
        this.role = {
          name: "",
          label: "",
          permissions: [],
        };
        this.$emit("close");
        await this.$message.success("角色创建成功");
      }
    },
  },
};
</script>

<style scoped></style>
