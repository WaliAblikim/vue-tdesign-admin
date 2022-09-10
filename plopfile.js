const viewGenerator = require("./plop-templates/view/index.js");
module.exports = function (plop) {
  plop.setGenerator("view", viewGenerator);
};
