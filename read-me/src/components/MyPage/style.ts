import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  background-color: white;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #91a3c7;

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

const Information = styled.div`
  width: 100%;
  height: 503px;
  border-bottom: 2px solid #91a3c7;

  img {
    width: 100%;
  }
  span {
    color: white;
    font-size: 100px;
    font-family: "Dancing Script", cursive;
    position: relative;
    left: 178px;
    bottom: 190px;
  }
`;

const Introduce = styled.div`
  width: 100%;
  height: 800px;
  border-bottom: 2px solid #91a3c7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .profile {
    width: 350px;
    border: 1px solid red;

    img {
      width: 100%;
    }
  }

  .introduce-text {
    width: 500px;
    display: flex;
    flex-direction: column;
    border: 1px solid red;

    span {
      font-size: 30px;
      font-family: "Gamja Flower", cursive;
    }
  }
`;

export { MainWrapper, Header, Introduce, Information, ProfileWrapper };
