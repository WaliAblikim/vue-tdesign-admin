export default [
  {
    url: "/roles",
    type: "post",
    response: (req) => {
      const role = req.body;
      role.id = "ROLEROLE";
      return role;
    },
  },
  {
    url: "/roles/role_admin",
    type: "get",
    response: () => {
      return {
        id: "role_admin",
        name: "ROLE_ADMIN",
        label: "管理员",
        permissions: ["dashboard", "user", "user:list", "user:roles"],
      };
    },
  },
  {
    url: "/roles",
    type: "get",
    response: () => {
      return {
        paging: {
          page: 1,
          size: 10,
          total: 2,
        },
        data: [
          {
            id: "role_admin",
            name: "ROLE_ADMIN",
            label: "管理员",
            permissions: ["dashboard", "user", "user:list", "user:roles"],
          },
          {
            id: "role_user",
            name: "ROLE_USER",
            label: "普通用户",
            permissions: ["homepage"],
          },
        ],
      };
    },
  },
];
