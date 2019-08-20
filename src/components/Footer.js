import React from "react";
import styled from "styled-components";
import { FaReact, FaGithub } from "react-icons/fa";

import style from "../config/style";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p>
        Made with React <FaReact /> &copy;2019
      </p>
      <p>
        <FaGithub /> GitHub link:
      </p>
    </div>
  );
};

const StyledFooter = styled(Footer)`
  height: 60px;
  background-color: ${style.bg};
  color: ${style.secondary};
  font-family: "Roboto", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
`;

export default StyledFooter;
