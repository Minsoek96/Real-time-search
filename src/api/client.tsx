import axios from "axios";
import { SERVER } from "./config";
import { getCacheStorage, setCacheStorage } from "../utils/cacheStorage";

export const API = axios.create({
  baseURL: `${SERVER}`,
});

API.interceptors.request.use((config) => {
  const cacheKey = `${config.method}-${config.url}`;
  const getCache = getCacheStorage(cacheKey);
  if (getCache) {
    return getCache;
  }
  return config;
});

API.interceptors.response.use((response) => {
  console.log("응답", response);
  return response;
});
