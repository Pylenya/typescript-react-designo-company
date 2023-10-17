import React from "react";
import { Logo } from "../Logo/Logo";
import { Wrapper } from "../Wrapper/Wrapper";
import { FooterCard } from "../FooterCard/FooterCard";
import { Link } from "react-router-dom";

import facebookIMG from "../../images/svg/icon-facebook.svg";
import youtubeIMG from "../../images/svg/icon-youtube.svg";
import twitterIMG from "../../images/svg/icon-twitter.svg";
import pinterestIMG from "../../images/svg/icon-pinterest.svg";
import instagramIMG from "../../images/svg/icon-instagram.svg";

import "./footer.scss";

export const Footer: React.FC = () => {
  return (
    <>
      <FooterCard />
      <footer className="footer">
        <Wrapper>
          <div className="footer__row">
            <div className="footer__logo">
              <Logo theme="light" />
            </div>
            <nav className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" to="/about">
                    our company
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/locations">
                    locations
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__contacts">
            <div className="footer__contact">
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="footer__contact">
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
            <div className="footer__social-media">
              <a href="#!">
                <img src={facebookIMG} alt="facebook" />
              </a>
              <a href="#!">
                <img src={youtubeIMG} alt="youtube" />
              </a>
              <a href="#!">
                <img src={twitterIMG} alt="twitter" />
              </a>
              <a href="#!">
                <img src={pinterestIMG} alt="pinterest" />
              </a>
              <a href="#!">
                <img src={instagramIMG} alt="instagram" />
              </a>
            </div>
          </div>
          <div className="footer__desc">
            <a href="https://github.com/Pylenya" target="_blank">
              <p>@ created by lenya.zverevich</p>
            </a>
          </div>
        </Wrapper>
      </footer>
    </>
  );
};
