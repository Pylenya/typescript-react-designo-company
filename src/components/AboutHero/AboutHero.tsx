import React from "react";

import { Wrapper } from "../Wrapper/Wrapper";

import imgDesk from "../../images/about/desktop/image-about-hero.jpg";
import imgTab from "../../images/about/tablet/image-about-hero.jpg";
import imgMob from "../../images/about/mobile/image-about-hero.jpg";

import "./abouthero.scss";

export const AboutHero = () => {
  return (
    <section className="about-hero">
      <Wrapper>
        <div className="about-hero__box">
          <div className="about-hero__text">
            <div className="about-hero__title">
              <h1>About us</h1>
            </div>
            <div className="about-hero__desc">
              <p>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients'
                audiences.
              </p>
            </div>
          </div>
          <picture>
            <source media="(max-width:480px)" srcSet={imgMob} />
            <source media="(max-width:999px)" srcSet={imgTab} />
            <img className="about-hero__img" src={imgDesk} alt="about image" />
          </picture>
        </div>
      </Wrapper>
    </section>
  );
};
