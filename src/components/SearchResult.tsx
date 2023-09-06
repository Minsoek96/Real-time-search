import React, { useEffect } from "react";
import { getSick } from "../api/sick";

const SearchResult = () => {
  useEffect(() => {
    getSick("아");
  }, []);
  return <div>결과</div>;
};

export default SearchResult;
