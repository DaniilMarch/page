import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

import style from "../config/style";

const ProjectItem = ({ className, img, gif, header, desc, github }) => {
  return (
    <div className={className}>
      <h1 className="project-header">{header}</h1>
      <div className="project-desc">{desc}</div>
      <div className="image-container" />
      <a className="project-link" href={github} target="_blank">
        GitHub <FaGithub />
      </a>
    </div>
  );
};

const StyledProjectItem = styled(ProjectItem)`
  width: 300px;
  border: 2px solid ${style.mainText};
  overflow: hidden;
  margin: 20px;
  .image-container {
    width: 100%;
    min-height: 150px;
    background: url(${props => props.img});
    background-size: cover;
    &:hover {
      background: url(${props => (props.gif ? props.gif : props.img)});
      background-size: cover;
    }
  }
  .project-link {
    display: block;
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${style.secondaryDarker};
      background-color: ${style.mainText};
    }
    cursor: pointer;
  }
  .project-header {
    font-size: 2rem;
    margin: 0;
    padding: 5px;
    height: 40px;
  }
  .project-desc {
    background-color: ${style.secondaryDarker};
    padding: 5px;
    font-style: italic;
    height: 40px;
  }
`;

export default StyledProjectItem;
