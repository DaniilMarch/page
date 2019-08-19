import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cn from "classnames";

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
            <h1>Daniil Marchenkov</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              quo itaque perferendis, repellat, deleniti veritatis quasi
              aliquid, consequatur cum doloremque nam porro voluptatum
              accusantium distinctio alias inventore labore nihil molestiae.
            </p>
          </div>
        </div>
        <div className="education">education</div>
        <div className="skills">skills</div>
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
      h1 {
        font-size: 2rem;
        color: ${style.highlightText};
        text-align: center;
      }
      p {
        text-align: justify;
        text-indent: 20px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: block;
    .header {
      border: 1px solid ${style.secondary};
      border-radius: 10px;
      display: block;
      img {
        float: left;
      }
      .bio {
        h1 {
          text-align: left;
        }
      }
    }
  }
`;

export default StyledBio;
