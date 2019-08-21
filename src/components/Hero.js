import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cn from "classnames";

import style from "../config/style";

const Hero = ({ className }) => {
  const [mounted, mount] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => mount(true), 0);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className={cn(className, { mounted })}>
      <h1>
        <span className="word-1">Daniil</span>{" "}
        <span className="word-2">Bereznev</span>
      </h1>
      <p>
        <span className="word-3">Front-end</span>{" "}
        <span className="word-4">developer</span>
      </p>
    </div>
  );
};

const StyledHero = styled(Hero)`
  width: 80%;
  h1 {
    font-size: 3rem;
    color: ${style.highlightText};
    margin: 10px;
    text-align: center;
  }
  p {
    font-size: 2rem;
    margin: 10px;
    background-color: ${style.secondaryDarker};
    padding: 10px;
    text-align: center;
  }
  .word-1,
  .word-2,
  .word-3,
  .word-4 {
    transition: all 0.2s ease;
    opacity: 0;
    transform: translate(-100px);
    display: inline-block;
  }
  .word-1 {
    transition-delay: 0s;
  }
  .word-2 {
    transition-delay: 0.1s;
  }
  .word-3 {
    transition-delay: 0.2s;
  }
  .word-4 {
    transition-delay: 0.3s;
  }
  &.mounted {
    .word-1,
    .word-2,
    .word-3,
    .word-4 {
      transform: translate(0);
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 6rem;
      color: ${style.highlightText};
      margin: 10px;
      text-align: left;
    }
    p {
      font-size: 2rem;
      margin: 10px;
      background-color: ${style.secondaryDarker};
      padding: 10px;
      text-align: left;
    }
  }
`;

export default StyledHero;
