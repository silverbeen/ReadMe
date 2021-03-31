import React from "react";
import * as S from "./style";
import { main, 강은빈 } from "../assets/index";

const introduce = [
  {
    text: "2004.02.09",
  },
  {
    text: `2020 대전내동중학교 졸업 <br/>2020 대덕SW마이스터고등학교 입학`,
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
        <h1>Introduce</h1>
        <S.ProfileWrapper>
          <div className="profile">
            <img src={강은빈} alt="나" />
          </div>
          <div className="introduce-text">
            <span>2004.02.09</span>
            <span>2020 대전내동중학교 졸업</span>
            <span>2020 대덕SW마이스터고등학교 입학</span>
            <span>
              안녕하세요.
              <br /> 대덕소프트웨어마이스터고등학교에 재학중인 2학년
              강은빈입니다.
            </span>
            <span>
              저의 최종 목표는 어떤 힘들 일, 삶에 지치는 일이 있어도 자책하지
              않고 행복한 삶을 사는 것이 제가 바라는 희망입니다.
            </span>
            <span></span>
          </div>
        </S.ProfileWrapper>
      </S.Introduce>
      <S.Skills></S.Skills>
    </S.MainWrapper>
  );
};
export default MyPage;
