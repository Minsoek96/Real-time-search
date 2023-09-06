import { SearchDispatchType, SerachActionTypes } from "../reducer/type";
import { API } from "./client";
import { Dispatch } from "react";
export const getSick = async(
  dispatch: Dispatch<SearchDispatchType>,
  searchKey: string
) => {
  try {
    dispatch({ type: SerachActionTypes.SEARCH_LIST_REQUEST });
    const response = await API.get(`/search?query=${searchKey}`);
    if (response) {
      dispatch({
        type: SerachActionTypes.SEARCH_LIST_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    dispatch({ type: SerachActionTypes.SEARCH_LIST_FAILURE, error });
  }
};
