import React from "react";
interface SearchItemProps {
  sickNm: string;
  isfocuse: boolean;
}
const SearchResultItem = ({ sickNm, isfocuse }: SearchItemProps) => {
  return (
    <div>
      <h2 style={{ color: isfocuse ? "red" : "black" }}>${sickNm}</h2>
    </div>
  );
};

export default React.memo(SearchResultItem);
