import Mock from "mockjs";
import userMocks from "./user.js";
import roleMocks from "./role.js";

const BASE_URL = process.env.VUE_APP_BASE_API;
[...userMocks, ...roleMocks].forEach((mock) => {
  Mock.mock(BASE_URL + mock.url, mock.type, (req) => {
    req.body = JSON.parse(req.body);
    return mock.response(req);
  });
});
