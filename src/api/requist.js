import axios from "axios";
const baseUrl = process.env.VUE_APP_BASE_API;
const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.response.use((response) => {
  return response.data;
});

const { get, post } = instance;
export { get, post };
