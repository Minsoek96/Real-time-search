import React from "react";
import styled from "styled-components";
interface SearchItemProps {
  sickNm: string;
  isfocuse: boolean;
}
const SearchResultItem = ({ sickNm, isfocuse }: SearchItemProps) => {
  return (
    <S.Wrapper>
      <S.Text isFocused={isfocuse}>{sickNm}</S.Text>
    </S.Wrapper>
  );
};

export default React.memo(SearchResultItem);

const S = {
  Wrapper: styled.div`
    padding: 8px 16px;
    transition: background-color 0.1s;

    &:hover {
      background-color: #fdeeeeea;
    }
  `,
  Text: styled.h2<{ isFocused: boolean }>`
    color: ${(props) => (props.isFocused ? "red" : "black")};
    margin: 0;
    font-size: 1.2em;
  `,
};
