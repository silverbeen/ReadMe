import React from "react";
import * as S from "./style";
import { main } from "../assets/index";

const MyPage = () => {
  return (
    <S.MainWrapper>
      <S.Information>
        <img className="main-img" src={main} alt="사진" />
      </S.Information>

      <S.Header>
        <ul>
          <li>INTRODUCE</li>
          <li>MY SKILLS</li>
          <li>MY PROJECT</li>
        </ul>
      </S.Header>
      <S.Introduce></S.Introduce>
    </S.MainWrapper>
  );
};

export default MyPage;
