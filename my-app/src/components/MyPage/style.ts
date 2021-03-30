import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  background-color: white;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;

  ul {
    height: 100%;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const Introduce = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 2px solid #91a3c7;
`;

const Information = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 2px solid #91a3c7;

  .main-img {
    width: 100%;
  }
`;

export { MainWrapper, Header, Introduce, Information };
