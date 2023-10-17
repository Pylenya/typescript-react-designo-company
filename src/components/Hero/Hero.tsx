import React from "react";
import "./hero.scss";
import { Button } from "../Button/Button";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <Wrapper>
        <div className="hero__container">
          <div className="hero__box">
            <h1 className="hero__title">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="hero__desc">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/about"}>
              <Button backgroundColor="white">Learn more</Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
