import React from "react";
import { Button } from "../Button/Button";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";

import "./footercard.scss";

export const FooterCard: React.FC = () => {
  return (
    <>
      <div className="footer-card">
        <Wrapper>
          <div className="footer-card__box">
            <div className="footer-card__text">
              <div className="footer-card__title">
                <h3>Let’s talk about your project</h3>
              </div>
              <div className="footer-card__desc">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </div>
            </div>
            <div className="footer-card__btn">
              <Link onClick={() => window.scrollTo(0, 0)} to={"/contact"}>
                <Button backgroundColor="white">Get in touch</Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
