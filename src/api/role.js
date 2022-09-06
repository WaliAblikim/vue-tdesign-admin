import { get, post } from "@/api/requist";

const create = (role) => {
  return post("/roles", role);
};

const update = (id, fields) => {
  return post(`/roles/${id}`, fields);
};

const remove = (id) => {
  return post(`/roles/${id}/delete`);
};

const list = (filter) => {
  return get("/roles", { params: filter });
};

export default {
  create,
  remove,
  list,
  update,
};
