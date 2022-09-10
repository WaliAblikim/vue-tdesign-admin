const { notEmpty } = require("../utils.js");
module.exports = {
  description: "创建页面组件",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入view名称(用-分隔单词),勿与之前重复,然后点击回车",
      validate: notEmpty,
    },
    {
      type: "confirm",
      name: "isPackage",
      message: "当前业务组件是否为主包主入口组件？",
      default: true,
    },
    {
      type: "input",
      message: "请输入该组件属于主包名称",
      name: "package",
      when: (answer) => {
        return !answer.isPackage;
      },
      default: "",
    },
  ],
  actions: (answer) => {
    const path = answer.isPackage
      ? `src/views/${answer.name}/index.vue`
      : `src/views/${answer.package}/${answer.name}.vue`;
    return [
      {
        type: "add",
        path,
        templateFile: "./plop-templates/view/index.hbs",
        data: {
          componentName: answer.isPackage
            ? `${answer.name}`
            : `${answer.package}${answer.name}`,
        },
      },
    ];
  },
};
