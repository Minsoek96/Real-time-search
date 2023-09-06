import { ISearchState, SearchDispatchType, SerachActionTypes } from "./type";

export const initialState: ISearchState = {
  isLoading: false,
  isUpdated: false,
  isError: null,
  SearchList: [],
};

export const reducer = (state = initialState, action: SearchDispatchType) => {
  switch (action.type) {
    case SerachActionTypes.SEARCH_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUpdated: false,
        SearchList: [...action.data],
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
