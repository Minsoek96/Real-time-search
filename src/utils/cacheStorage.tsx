//input : key , data , expireTime
//output : cache result
import { ISick } from "../types";
interface ICacheItem {
  key: string;
  data: ISick[];
  etime: number;
}

export const setCacheStorage = ({ key, data, etime }: ICacheItem) => {
  const expireTimeFormat = etime * 60 * 1000;
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

  if (now > expireTime) {
    localStorage.removeItem(key);
    return null;
  }

  return getChacheItem;
};
