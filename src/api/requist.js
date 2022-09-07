import axios from "axios";
import { MessagePlugin } from "tdesign-vue/lib/plugins.js";
import store from "@/store/index.js";

const baseUrl = process.env.VUE_APP_BASE_API;
const tokenPrefix = "Bearer ";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use((request) => {
  if (store.state.token) {
    request.headers["Authorization"] = tokenPrefix + store.state.token;
  }
  return request;
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
  async (error) => {
    await handleResponseError(error);
    return Promise.reject(error);
  }
);

const handleResponseError = async (error) => {
  const { response } = error;
  if (error.code === 401) {
    await store.dispatch("logout");
  }
  await MessagePlugin.error(response.data.message);
};

const { get, post } = instance;

export { get, post };
