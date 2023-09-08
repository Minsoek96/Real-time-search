import React, { useContext, useEffect } from "react";
import { getSick } from "../api/sick";
import { ISick } from "../types";
import {
  SearchDispatchContext,
  SearchStateContext,
} from "../context/searchContext";
import useDebounce from "../hooks/useDebounce";
import SearchResultItem from "./SearchItem";
import styled from "styled-components";

interface SearchResultProps {
  keyWord: string;
  selectIdx: number;
  changeFloorIdx: (idx: number) => void;
  changeSelectMode: (selectItem: string) => void;
  isSelectItem: boolean;
  onSearch: boolean;
}

const SearchResult = ({
  keyWord,
  selectIdx,
  changeFloorIdx,
  changeSelectMode,
  isSelectItem,
  onSearch,
}: SearchResultProps) => {
  const { searchList, isLoading, isError } = useContext(SearchStateContext);
  const dispatch = useContext(SearchDispatchContext);
  const debouncedQuery = useDebounce(keyWord, 500);
  const searchEmpty = searchList.length === 0;
  const floorIdx = searchList.length - 1;

  useEffect(() => {
    if (debouncedQuery) {
      dispatch && getSick(dispatch, keyWord);
      changeFloorIdx(floorIdx);
    }
  }, [floorIdx, debouncedQuery]);

  useEffect(() => {
    if (isSelectItem) {
      changeSelectMode(searchList[selectIdx]?.sickNm || keyWord);
    }
  }, [isSelectItem]);

  if (isLoading) return <S.wrapper isVisible={onSearch}> Loading</S.wrapper>;
  if (searchEmpty)
    return <S.wrapper isVisible={onSearch}> 검색결과 없음</S.wrapper>;
  if (isError) return <S.wrapper isVisible={onSearch}> Error </S.wrapper>;

  return (
    <S.wrapper isVisible={onSearch}>
      {searchList &&
        searchList.map((search: ISick, idx) => (
          <SearchResultItem
            key={search.sickCd}
            sickNm={search.sickNm}
            isfocuse={selectIdx === idx}
          />
        ))}
    </S.wrapper>
  );
};

export default SearchResult;
const S = {
  wrapper: styled.div<{ isVisible: boolean }>`
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: absolute;
    width: 50%;
    max-height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 4rem;
    padding: 1rem;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    display: ${(props) => (props.isVisible ? "block" : "none")};
  `,
};
