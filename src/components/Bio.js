import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cn from "classnames";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitSquare,
  FaNpm
} from "react-icons/fa";

import ContentWrapper from "./ContentWrapper";
import face from "../img/face.jpg";
import style from "../config/style";

const Bio = ({ className }) => {
  const [unmounted, mount] = useState(true);
  useEffect(() => {
    mount(false);
    return () => mount(true);
  }, []);
  return (
    <ContentWrapper>
      <div className={cn(className, { unmounted })}>
        <h1 className="display">Bio</h1>
        <div className="header">
          <img src={face} />

          <div className="bio">
            <h1 className="section-header">Daniil Marchenkov</h1>
            <p className="section-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              quo itaque perferendis, repellat, deleniti veritatis quasi
              aliquid, consequatur cum doloremque nam porro voluptatum
              accusantium distinctio alias inventore labore nihil molestiae.
            </p>
          </div>
        </div>
        <div className="education">
          <h1 className="section-header">Education</h1>
          <p className="section-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla
            voluptas architecto laborum, quibusdam dolore totam, ex eius
            assumenda eum nisi eligendi cupiditate. Sunt vero quae velit ipsum
            nam earum.
          </p>
        </div>
        <div className="skills">
          <h1 className="section-header">Skills</h1>
          <div className="section-content">
            <ul>
              <li>
                <span className="skill-category">Hard</span>
                <ul>
                  <li>
                    HTML <FaHtml5 color={style.highlightText} />
                  </li>
                  <li>
                    CSS <FaCss3Alt color={style.highlightText} />
                  </li>
                  <li>
                    JS <FaJsSquare color={style.highlightText} />
                    <ul>
                      <li>
                        React <FaReact color={style.highlightText} />
                        <ul>
                          <li>React Router</li>
                          <li>Styled Components</li>
                        </ul>
                      </li>
                      <li>
                        Redux
                        <ul>
                          <li>Redux Form</li>
                          <li>Redux Thunk, Redux Saga</li>
                        </ul>
                      </li>
                      <li>
                        NodeJS <FaNodeJs color={style.highlightText} />
                        <ul>
                          <li>Express.js</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Other
                    <ul>
                      <li>
                        Git <FaGitSquare color={style.highlightText} />
                      </li>
                      <li>
                        npm <FaNpm color={style.highlightText} />
                      </li>
                      <li>Basics of Webpack</li>
                      <li>B2 English</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span className="skill-category">Soft</span>
                <ul>
                  <li>Responsible</li>
                  <li>Open-minded</li>
                  <li>Fast learner</li>
                  <li>Problem solver</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

const StyledBio = styled(Bio)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  transform: translate(0px);
  opacity: 1;
  transition: all 0.2s ease-in;
  .section-header {
    font-size: 2rem;
    color: ${style.highlightText};
    text-align: center;
  }
  .section-content {
    text-align: justify;
    text-indent: 20px;
    ul {
      text-indent: 0px;
      list-style: none;
      margin: 0;
      padding: 0;
      .skill-category {
        color: ${style.highlightText};
      }
      li {
        margin: 0;
        padding: 0 7px;
        line-height: 30px;
        border-left: 1px solid ${style.highlightText};
        &:last-child {
          border-left: none;
          &::before {
            border-left: 1px solid ${style.highlightText};
          }
        }
        &::before {
          position: relative;
          top: -0.3em;
          height: 1em;
          width: 12px;
          content: "";
          border-bottom: 1px solid ${style.highlightText};
          display: inline-block;
          left: -7px;
          color: white;
        }
      }
      ul {
        list-style: none;
        margin-left: 40px;
        padding: 0;
      }
    }
  }
  &.unmounted {
    transform: translate(1000px);
    opacity: 0;
  }
  .display {
    font-size: 4rem;
    margin: 10px;
    color: ${style.highlightText};
    padding: 0px 5px;
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;
    margin-bottom: 10px;
    img {
      border: 6px solid ${style.highlightDarker};
      border-radius: 50%;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      display: block;
      margin: 20px;
    }
    &::after {
      display: block;
      content: "";
      clear: both;
    }
    .bio {
      padding: 5px 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    display: block;
    .section-header {
      font-size: 2rem;
      color: ${style.highlightText};
      text-align: left;
    }
    .section-content {
      text-align: justify;
      text-indent: 20px;
    }
    .header {
      border: 1px solid ${style.secondary};
      border-radius: 10px;
      display: block;
      img {
        float: left;
      }
      .bio {
      }
    }
  }
`;

export default StyledBio;
