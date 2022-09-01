import Mock from "mockjs";

const BASE_URL = process.env.VUE_APP_BASE_API;
Mock.mock(`${BASE_URL}/tokens`, () => {
  return "dsddsdsdsdsdddssdsdsdsdsdsdsdsds";
});
