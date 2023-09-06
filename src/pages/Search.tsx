import React, { useState } from "react";
import SearchResult from "../components/SearchResult";
import SearchInput from "../components/SearchInput";
import { SearchProvider } from "../context/searchContext";

const Search = () => {
  const [keyword, setkeyWord] = useState<string>("");
  const [focusIdx, setFocusIdx] = useState<number>(-1);
  const [floorIdx, setFloorIdx] = useState<number>(-1);
  const [isSelect, setIsSelect] = useState<boolean>(false);

  const changekeyWord = (search: string) => {
    setkeyWord(search);
    if (!isSelect) {
      setFocusIdx(-1);
    } else {
      setIsSelect(false);
    }
  };

  const changeIdx = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isFloor = floorIdx <= focusIdx;
    if (!isFloor && e.key === "ArrowDown") {
      setFocusIdx((preIdx) => preIdx + 1);
    }
    if (focusIdx > -1 && e.key === "ArrowUp") {
      setFocusIdx((preIdx) => preIdx - 1);
    }
    if (e.key === "Enter") {
      setIsSelect(true);
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
        changeSelectMode={changekeyWord}
        isSelectMode={isSelect}
      />
    </SearchProvider>
  );
};

export default Search;
