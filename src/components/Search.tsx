import React, { useState } from "react";
import SearchResult from "./SearchResult";
import { SearchProvider } from "../context/searchContext";
import useKeyNavigation from "../hooks/useKeyNavigation";
import styled from "styled-components";

const Search = () => {
  const [keyword, setkeyWord] = useState<string>("");
  const [isKeySelect, setIsKeySelect] = useState<boolean>(false);
  const [onSerarch, setOnSearch] = useState<boolean>(false);

  const { focusIdx, setFocusIdx, setFloorIdx, changeIdx } = useKeyNavigation(
    -1,
    -1,
    () => setIsKeySelect(true)
  );

  const changekeyWord = (search: string) => {
    setOnSearch(true);
    setkeyWord(search);
    if (!isKeySelect) {
      setFocusIdx(-1);
    } else {
      setIsKeySelect(false);
    }
  };

  return (
    <SearchProvider>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <S.Input
          placeholder="Search..."
          onKeyDown={changeIdx}
          value={keyword}
          onChange={(e) => changekeyWord(e.target.value)}
          onClick={() => setOnSearch(!onSerarch)}
        />
        <SearchResult
          keyWord={keyword}
          selectIdx={focusIdx}
          changeFloorIdx={setFloorIdx}
          changeSelectMode={changekeyWord}
          isSelectItem={isKeySelect}
          onSearch={onSerarch}
        />
      </S.Form>
    </SearchProvider>
  );
};

export default Search;

const S = {
  Form: styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
  `,
  Input: styled.input`
    width: 25rem;
    height: 3rem;
    border-radius: 20px;
    border: 1px solid #7344c9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
    padding-left: 10px;
    cursor: pointer;
    &:focus {
      background-color: #caebd8;
      outline: none;
    }
  `,
  Button: styled.button`
    background-color: #326db1;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 20px;
    cursor: pointer;
  `,
};
