import { get } from "@/api/requist.js";

const me = () => {
  return get("/users/me");
};

export default {
  me,
};
