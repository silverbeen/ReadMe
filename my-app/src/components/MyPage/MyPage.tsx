import React, { useEffect, useState } from "react";
import * as S from "./style";
import { main, 강은빈 } from "../assets/index";

const introduce = [
  {
    text: "2004.02.09",
  },
  {
    text: `2020 대전내동중학교 졸업 2020 대덕SW마이스터고등학교 입학`,
  },
  {
    text: "2020 대덕SW마이스터고등학교 입학",
  },
  {
    text: "2020 대덕SW마이스터고등학교 입학",
  },
  {
    text: "2020 대덕SW마이스터고등학교 입학",
  },
];

const MyPage = () => {

  const introduceClickHandler = () => {
    window.scroll({top:250, left: 0, h})
  }

  return (
    <S.MainWrapper>
      <S.Information>
        <img src={main} alt="사진" />
        <span>My Name is Silverbeen</span>
      </S.Information>

      <S.Header>
        <ul>
          <li>INTRODUCE</li>
          <li>MY SKILLS</li>
          <li>MY PROJECT</li>
        </ul>
      </S.Header>
      <S.Introduce>
        <S.Title>Introduce</S.Title>
        <S.ProfileWrapper>
          <div className="profile">
            <img src={강은빈} alt="나" />
          </div>
          <div className="introduce-text">
            {introduce.map((text, index) => (
              <div key={index}>{text.text}</div>
            ))}
          </div>
        </S.ProfileWrapper>
      </S.Introduce>
      <S.Skills>
        <S.Title>Skills</S.Title>
        <S.ProfileWrapper></S.ProfileWrapper>
      </S.Skills>
    </S.MainWrapper>
  );
};
export default MyPage;
