import React, { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./header.scss";

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
          <Link className="header__logo" to="/home">
            <Logo theme="dark" />
          </Link>
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
                <Link
                  onClick={() => setNav(!nav)}
                  className="header__link"
                  to="/home"
                >
                  home
                </Link>
              </li>
              <li className="header__item">
                <Link
                  onClick={() => setNav(!nav)}
                  className="header__link"
                  to="/about"
                >
                  our company
                </Link>
              </li>
              <li className="header__item">
                <Link
                  onClick={() => setNav(!nav)}
                  className="header__link"
                  to="/locations"
                >
                  locations
                </Link>
              </li>
              <li className="header__item">
                <Link
                  onClick={() => setNav(!nav)}
                  className="header__link"
                  to="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link className="header__link" to="/about">
                  our company
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/locations">
                  locations
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};
