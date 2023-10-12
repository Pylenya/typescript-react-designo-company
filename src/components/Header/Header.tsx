import React, { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import "./header.scss";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header: React.FC = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    let root = document.getElementById("body");
    let inlineStyles: CSSStyleDeclaration;
    if (root !== null) {
      inlineStyles = root.style;
      if (nav) {
        inlineStyles.overflowY = "hidden";
      } else {
        inlineStyles.overflowY = "visible";
      }
    }
  }, [nav]);
  return (
    <header className="header">
      <Wrapper>
        <div className="header__row">
          <a className="header__logo" href="#!">
            <Logo theme="dark" />
          </a>
          <button
            className="mobile__btn"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? (
              <AiOutlineClose size={35} color="white" />
            ) : (
              <AiOutlineMenu size={35} color="black" />
            )}
          </button>
          <nav
            className={nav ? "header__nav-burger active" : "header__nav-burger"}
          >
            <ul className="header__list-burger">
              <li className="header__item">
                <a className="header__link" to="/home">
                  our company
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" to="/headphones">
                  locations
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" to="/speakers">
                  contact
                </a>
              </li>
            </ul>
          </nav>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a className="header__link" href="#!">
                  our company
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#!">
                  locations
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#!">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};
