import { ISearchState, SearchDispatchType, SerachActionTypes } from "./type";

export const initialState: ISearchState = {
  isLoading: false,
  isUpdated: false,
  isError: null,
  searchList: [],
};

export const reducer = (state = initialState, action: SearchDispatchType) => {
  switch (action.type) {
    case SerachActionTypes.SEARCH_LIST_SUCCESS:
      console.log("리듀서", action.data);
      console.log("배열 검사", Array.isArray(action.data));
      console.log(
        "나는 무슨 타입",
        Object.prototype.toString.call(action.data)
      );
      return {
        ...state,
        isLoading: false,
        isUpdated: false,
        searchList: Array.isArray(action.data) ? [...action.data] : [],
      };
    case SerachActionTypes.SEARCH_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SerachActionTypes.SEARCH_LIST_UPDATED:
      return {
        ...state,
      };
    case SerachActionTypes.SEARCH_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    default:
      return state;
  }
};
