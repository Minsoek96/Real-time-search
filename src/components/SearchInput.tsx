import React from "react";

interface SearchInputProps {
  changeSearch: (text: string) => void;
  keyWord: string;
  changeIdx: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  changeSearch,
  keyWord,
  changeIdx,
}: SearchInputProps) => {
  const handleClick = () => {

    
  };
  return (
    <div>
      <input
        onKeyDown={changeIdx}
        value={keyWord}
        onChange={(e) => changeSearch(e.target.value)}
      ></input>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default SearchInput;
