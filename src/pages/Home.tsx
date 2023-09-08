import React from "react";
import styled from "styled-components";
import Search from "../components/Search";

const Home = () => {
  return (
    <S.Wrapper>
      <S.Banner>
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
        <S.Container>
          <Search />
        </S.Container>
      </S.Banner>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    width: 100%;
  `,
  Banner: styled.div`
    background-color: rgb(202, 233, 255);
    padding: 80px 0px 160px;
    h2 {
      text-align: center;
    }
  `,
  Container: styled.div`
    margin: 0 auto;
  `,
};

export default Home;
