import React, { useContext, useState } from "react";
import SearchResult from "../components/SearchResult";
import SearchInput from "../components/SearchInput";
import { SearchProvider, SearchStateContext } from "../context/searchContext";

const Search = () => {
  const [keyword, setkeyWord] = useState<string>("");
  const [focusIdx, setFocusIdx] = useState<number>(-1);
  const [floorIdx, setFloorIdx] = useState<number>(-1);

  const changekeyWord = (serach: string) => {
    setkeyWord(serach);
    setFocusIdx(-1);
  };

  const changeIdx = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('floor',floorIdx)
    console.log(focusIdx)
    const isFloor = floorIdx <= focusIdx;
    if (!isFloor && e.key === "ArrowDown") {
      setFocusIdx((preIdx) => preIdx + 1);
    }
    if (focusIdx > -1 && e.key === "ArrowUp") {
      setFocusIdx((preIdx) => preIdx - 1);
    }
    console.log(focusIdx);
  };

  return (
    <SearchProvider>
      <SearchInput
        changeSearch={changekeyWord}
        keyWord={keyword}
        changeIdx={changeIdx}
      />
      <SearchResult
        keyWord={keyword}
        selectIdx={focusIdx}
        changeFloorIdx={setFloorIdx}
      />
    </SearchProvider>
  );
};

export default Search;
