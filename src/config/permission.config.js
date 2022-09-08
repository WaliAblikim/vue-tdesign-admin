export const permissions = {
  DASHBOARD: "dashboard",
  USER: "user",
  USER_LIST: "user:list",
  USER_LIST_ADD: "user:list:add",
  USER_ROLES: "user:roles",
  USER_ROLES_CREATE: "user:roles:create",
  USER_ROLES_EDIT: "user:roles:edit",
  USER_ROLES_DELETE: "user:roles:delete",
};
export const permissionsTree = [
  { label: "控制台", value: permissions.DASHBOARD },
  {
    label: "用户",
    value: permissions.USER,
    children: [
      {
        label: "用户管理",
        value: permissions.USER_LIST,
        children: [{ label: "用户添加", value: permissions.USER_LIST_ADD }],
      },
      {
        label: "角色管理",
        value: permissions.USER_ROLES,
        children: [
          { label: "角色创建", value: permissions.USER_ROLES_CREATE },
          { label: "角色编辑", value: permissions.USER_ROLES_EDIT },
          { label: "角色删除", value: permissions.USER_ROLES_DELETE },
        ],
      },
    ],
  },
];
