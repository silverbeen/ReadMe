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
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #5c7aa6;
  margin-left: 54px;
  font-family: "Dancing Script", cursive;
`;

const ProfileWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 450px;
    background-color: #91a3c7;
    box-shadow: 1px 3px 2px 0 #8080807a;

    img {
      width: 80%;
    }
  }

  .introduce-text {
    width: 500px;
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    overflow: hidden;

    div {
      margin-right: 500px;
      width: 500px;
      height: 100%;
      font-size: 30px;
      font-family: "Sunflower", sans-serif;
    }
  }
`;

const Skills = styled.div`
  width: 100%auto;
  height: 700px;
`;

export {
  MainWrapper,
  Header,
  Introduce,
  Information,
  ProfileWrapper,
  Skills,
  Title,
};
