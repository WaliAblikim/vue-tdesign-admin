import { post } from "./requist";
const create = ({ username, password }) => {
  return post("/tokens", { username, password });
};

export default {
  create,
};
