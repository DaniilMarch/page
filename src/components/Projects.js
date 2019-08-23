import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cn from "classnames";

import style from "../config/style";
import picshare from "../img/picshare.png";
import picsharegif from "../img/picsharegif.gif";
import smalltalk from "../img/smalltalk.png";
import smalltalkgif from "../img/smalltalkgif.gif";
import bookkeeper from "../img/bookkeeper.png";
import bookkeepergif from "../img/bookkeeper.gif";
import testtask from "../img/test-taskj.png";
import testtaskgif from "../img/test-taskgif.gif";
import hangman from "../img/hangman.png";
import hangmangif from "../img/hangman.gif";
import tgbot from "../img/tgbot.png";
import ProjectItem from "./ProjectItem";

const Projects = ({ className }) => {
  const [mounted, mount] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => mount(true), 0);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className={cn(className, { mounted })}>
      <h1>Projects</h1>
      <p>Here are some of my projects</p>
      <div className="projects-container">
        <ProjectItem
          img={picshare}
          gif={picsharegif}
          header="picshare"
          desc="Small social network for sharing images"
          github="https://github.com/DaniilMarch/picshare"
        />
        <ProjectItem
          img={smalltalk}
          gif={smalltalkgif}
          header="smalltalk"
          desc="Chat server and client built with NodeJS, Express.js and socket.io"
          github="https://github.com/DaniilMarch/smalltalk"
        />
        <ProjectItem
          img={bookkeeper}
          gif={bookkeepergif}
          header="bookkeeper"
          desc="App for keeping track of read books"
          github="https://github.com/DaniilMarch/bookkeeper"
        />
        <ProjectItem
          img={testtask}
          gif={testtaskgif}
          header="message sender"
          desc="Test task made for some job application"
          github="https://github.com/DaniilMarch/test-task"
        />
        <ProjectItem
          img={hangman}
          gif={hangmangif}
          header="hangman"
          desc="The hangman game about guessing words"
          github="https://github.com/DaniilMarch/the-hangman-game"
        />
        <ProjectItem
          img={tgbot}
          header="hangman bot"
          desc="Telegram bot who knows how to play the hangman game"
          github="https://github.com/DaniilMarch/the-hangman-bot"
        />
      </div>
    </div>
  );
};

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  transition: all 0.2s ease-in;
  transform: translate(1000px);
  &.mounted {
    transform: translate(0px);
  }
  h1 {
    font-size: 3rem;
    color: ${style.highlightText};
    margin: 10px;
  }
  p {
    font-size: 2rem;
    background-color: ${style.secondaryDarker};
    padding: 5px;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  .projects-container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default StyledProjects;
