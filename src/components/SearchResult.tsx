import React, { useContext, useEffect } from "react";
import { getSick } from "../api/sick";
import { ISick } from "../types";
import {
  SearchDispatchContext,
  SearchStateContext,
} from "../context/searchContext";
import useDebounce from "../hooks/useDebounce";
import SearchResultItem from "./SearchItem";

interface SearchResultProps {
  keyWord: string;
  selectIdx: number;
  changeFloorIdx: (idx: number) => void;
}

const SearchResult = ({
  keyWord,
  selectIdx,
  changeFloorIdx,
}: SearchResultProps) => {
  const { searchList, isLoading } = useContext(SearchStateContext);
  const dispatch = useContext(SearchDispatchContext);
  const debouncedQuery = useDebounce(keyWord, 500);
  const searchEmpty = searchList.length === 0;
  const floorIdx = searchList.length - 1;

  useEffect(() => {
    if (debouncedQuery) {
      dispatch && getSick(dispatch, keyWord);
      changeFloorIdx(floorIdx);
    }
  }, [keyWord, debouncedQuery]);

  if (isLoading) return <div> Loading</div>;
  if (searchEmpty) return <div> 검색결과 없음</div>;

  return (
    <div>
      {keyWord}
      {searchList &&
        searchList.map((search: ISick, idx) => (
          <SearchResultItem
            key={search.sickCd}
            sickNm={search.sickNm}
            isfocuse={selectIdx === idx}
          />
        ))}
    </div>
  );
};

export default SearchResult;
