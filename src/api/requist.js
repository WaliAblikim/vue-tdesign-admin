import axios from "axios";
import { MessagePlugin } from "tdesign-vue";
const baseUrl = process.env.VUE_APP_BASE_API;

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code) {
      MessagePlugin.error(res.message);
      return Promise.reject(new Error(res.message));
    }
    return response.data;
  },
  (error) => {
    MessagePlugin.error(error.message);
    return Promise.reject(error);
  }
);

const { get, post } = instance;
export { get, post };
