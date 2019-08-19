import styled from "styled-components";
import style from "../config/style";

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  min-height: calc(100vh - 60px);
  background: ${style.bg};
  background-size: cover;
  background-repeat: no-repeat;
  color: ${style.mainText};
`;

export default Wrapper;
