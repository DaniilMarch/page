import styled from "styled-components";
import style from "../config/style";
import bg from "../img/bg.jpeg";

const HeroWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  min-height: calc(100vh - 60px);
  background: linear-gradient(rgba(68, 68, 68, 0.8), rgba(68, 68, 68, 0.5)),
    url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${style.mainText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default HeroWrapper;
