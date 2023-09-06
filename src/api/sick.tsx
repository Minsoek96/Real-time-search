import { API } from "./client";
export const getSick = async (searchKey: string) => {
  try {
    const response = await API.get(`/search?query=${searchKey}`);
    if (response) {
      return response.data
    }
  } catch (error) {
    throw error;
  }
};
