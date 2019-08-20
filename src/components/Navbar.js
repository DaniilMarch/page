import React, { useState } from "react";
import styled from "styled-components";
import cn from "classnames";
import { Link, withRouter } from "react-router-dom";

import style from "../config/style";

const Navbar = ({ className, location }) => {
  const [open, toggle] = useState(false);
  const onNavBtnClick = () => {
    toggle(!open);
  };
  console.log(location);
  return (
    <div className={className}>
      <div className={cn("btn-nav", { open })} onClick={onNavBtnClick}>
        <div className="bar-1" />
        <div className="bar-2" />
        <div className="bar-3" />
      </div>
      <ul className={cn("navbar-list", { open })}>
        <li>
          <Link to="/" onClick={onNavBtnClick}>
            home
          </Link>
        </li>
        <li>
          <Link to="/bio" onClick={onNavBtnClick}>
            bio
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={onNavBtnClick}>
            projects
          </Link>
        </li>
        <li>
          <Link to="/contacts" onClick={onNavBtnClick}>
            contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

const StyledNavbar = styled(Navbar)`
  position: relative;
  z-index: 2;
  .btn-nav {
    position: fixed;
    right: 10px;
    top: 10px;
    cursor: pointer;
    border: 1px solid ${style.mainText};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 2;

    div {
      transition: all 0.2s ease-in;
      position: absolute;
      width: 15px;
      height: 1px;
      background-color: ${style.mainText};
      left: 7px;

      &:nth-child(1) {
        top: 10px;
      }
      &:nth-child(2) {
        top: 15px;
      }
      &:nth-child(3) {
        top: 20px;
      }
    }

    &.open {
      div {
        &:nth-child(1) {
          transform: translate(0px, 5px) rotate(45deg);
        }
        &:nth-child(2) {
          transform: translate(90deg);
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translate(0px, -5px) rotate(-45deg);
        }
      }
    }
  }
  .navbar-list {
    margin: 0;
    padding: 0;
    text-align: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;

    &.open {
      li {
        transform: translate(0);
      }
    }
    li {
      font-size: 3rem;
      transition: all 0.2s ease-in;
      padding: 10px;
      box-sizing: border-box;
      list-style-type: none;
      color: ${style.highlightText};
      text-transform: uppercase;
      transform: translate(100%, 0);
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      &:nth-child(1) {
        transition-delay: 0s;
        background-color: rgba(107, 110, 112, 0.6);
      }
      &:nth-child(2) {
        transition-delay: 0.1s;
        background-color: rgba(107, 110, 112, 0.8);
      }
      &:nth-child(3) {
        transition-delay: 0.2s;
        background-color: rgba(107, 110, 112, 0.6);
      }
      &:nth-child(4) {
        transition-delay: 0.3s;
        background-color: rgba(107, 110, 112, 0.8);
      }
      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: ${style.lighter};
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
    .navbar-list {
      height: 60px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      li {
        transform: translate(0, -100%);
        font-size: 2rem;
      }
    }
  }
`;

export default withRouter(StyledNavbar);
