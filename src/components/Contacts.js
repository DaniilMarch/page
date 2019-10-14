import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaGithub, FaTelegram } from "react-icons/fa";
import cn from "classnames";

import style from "../config/style";

const Contacts = ({ className }) => {
  const [mounted, mount] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => mount(true), 0);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className={cn(className, { mounted })}>
      <h1>Contacts</h1>
      <p>Feel free to contact me: </p>
      <div className="content">
        <p>Email: Daniil2305@yandex.ru</p>
        <p>Phone: +7-921-340-4201</p>
        <p>Social links: </p>
        <div className="social-links-icons">
          <a href="https://github.com/DaniilMarch" target="_blank">
            <FaGithub color={style.highlightText} />
          </a>{" "}
          <a href="https://t.me/dtrmnd" target="_blank">
            <FaTelegram color={style.highlightText} />
          </a>
        </div>
      </div>
    </div>
  );
};

const StyledContacts = styled(Contacts)`
  width: 80%;
  text-align: center;
  transform: translate(1000px);
  transition: all 0.2s ease-in;
  &.mounted {
    transform: translate(0px);
  }
  .content {
    background-color: ${style.secondaryDarker};
    padding: 10px;
  }
  h1 {
    color: ${style.highlightText};
    font-size: 2rem;
    margin: 10px;
  }
  p {
    margin: 10px;
    z-index: 10;
  }

  a {
    color: inherit;
    z-index: 1000;
    font-size: 3rem;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 966px) {
    text-align: left;
    h1 {
      font-size: 6rem;
    }
    p {
      font-size: 2rem;
    }
    .social-links-icons {
      font-size: 1rem;
      margin-left: 10px;
    }
  }
`;

export default StyledContacts;
