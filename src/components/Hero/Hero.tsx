import React from "react";
import "./hero.scss";
import { Button } from "../Button/Button";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
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
          <Button backgroundColor="white">Learn more</Button>
        </div>
      </div>
    </section>
  );
};
