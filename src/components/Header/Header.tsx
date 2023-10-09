import React from "react";
import { Logo } from "../Logo/Logo";
import "./header.scss";
export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__row">
        <a className="header__logo" href="#!">
          <Logo theme="dark" />
        </a>
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
    </header>
  );
};
