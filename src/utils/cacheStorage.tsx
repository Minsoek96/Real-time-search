//input : key , data , expireTime
//output : cache result
import { ISick } from "../types";
interface ICacheItem {
  key: string;
  data: ISick[];
  etime: number;
}

export const setCacheStorage = ({ key, data, etime }: ICacheItem) => {
  const minuteInMilliseconds = 60 * 1000;
  const expireTimeFormat = etime * minuteInMilliseconds;
  const item = {
    data,
    expiretime: new Date().getTime() + expireTimeFormat,
  };
  return localStorage.setItem(key, JSON.stringify(item));
};

export const getCacheStorage = (key: string) => {
  const getCacheItemsStr = localStorage.getItem(key);
  const getChacheItem = getCacheItemsStr && JSON.parse(getCacheItemsStr);

  if (!getChacheItem) {
    return null;
  }

  const now = new Date().getTime();
  const expireTime = getChacheItem.expiretime;
  const isTimeExpired = now > expireTime;

  if (isTimeExpired) {
    deleteCacheStorage(key);
    return null;
  }

  return getChacheItem;
};

export const deleteCacheStorage = (key: string) => {
  localStorage.removeItem(key);
};
