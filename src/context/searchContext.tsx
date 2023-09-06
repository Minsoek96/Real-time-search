import React, { useReducer, ReactNode, Dispatch } from "react";
import { initialState, reducer } from "../reducer/searchReducer";
import { SearchDispatchType } from "../reducer/type";

export const SearchStateContext = React.createContext(initialState);
export const SearchDispatchContext =
  React.createContext<Dispatch<SearchDispatchType> | null>(null);

interface ISearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchStateContext.Provider value={data}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
};
