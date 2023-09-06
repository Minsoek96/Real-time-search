import React from "react";
interface SearchItemProps {
  sickNm: string;
  focuseIdx: boolean;
}
const SearchResultItem = ({ sickNm, focuseIdx }: SearchItemProps) => {
  return (
    <div>
      <h2 style={{color : focuseIdx ? 'red' : 'black'}}>${sickNm}</h2>
    </div>
  );
};

export default SearchResultItem;
