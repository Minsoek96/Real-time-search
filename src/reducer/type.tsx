import { ISick } from "../types";

export interface ISearchState {
  isLoading: boolean;
  isUpdated: boolean;
  isError: null | string;
  SearchList: ISick[];
}

export enum SerachActionTypes {
  SEARCH_LIST_SUCCESS = "SEARCH_LIST_SUCCESS",
  SEARCH_LIST_REQUEST = "SEARCH_LIST_REQUEST",
  SEARCH_LIST_UPDATED = "SEARCH_LIST_UPDATED",
  SEARCH_LIST_FAILURE = "SEARCH_LIST_FAILURE",
}

export interface SearchSuccessDispatch {
  type: typeof SerachActionTypes.SEARCH_LIST_SUCCESS;
  data: ISick[];
}

export interface SearchRequestDispatch {
  type: typeof SerachActionTypes.SEARCH_LIST_REQUEST;
}

export interface SearchUpdateDispatch {
  type: typeof SerachActionTypes.SEARCH_LIST_UPDATED;
}

export interface SearchFailureDispatch {
  type: typeof SerachActionTypes.SEARCH_LIST_FAILURE;
  error: any;
}

export type SearchDispatchType =
  | SearchSuccessDispatch
  | SearchRequestDispatch
  | SearchUpdateDispatch
  | SearchFailureDispatch;
