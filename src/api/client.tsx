import axios from "axios";
import { SERVER } from "./config";
import { getCacheStorage, setCacheStorage } from "../utils/cacheStorage";
import { error } from "console";

export const API = axios.create({
  baseURL: `${SERVER}`,
});

API.interceptors.request.use(async (config) => {
  const cacheKey = `${config.method}-${config.url}`;
  const getCache = await getCacheStorage(cacheKey);
  if (getCache) {
    return Promise.reject({ customData: getCache });
  }
  return config;
});

API.interceptors.response.use(
  (response) => {
    const cachekey = `${response.config.method}-${response.config.url}`;
    setCacheStorage({ key: cachekey, data: response.data, etime: 1 });
    return response;
  },
  (error) => {
    if (error.customData) {
      return error.customData;
    }
    return error;
  }
);
