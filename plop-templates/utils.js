exports.notEmpty = (input) => {
  if (input && input.trim !== "") {
    return true;
  }
  return "此选项为必填";
};
