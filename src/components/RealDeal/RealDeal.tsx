import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";

import imgDesk from "../../images/about/desktop/image-real-deal.jpg";
import imgTab from "../../images/about/tablet/image-real-deal.jpg";
import imgMob from "../../images/about/mobile/image-real-deal.jpg";

import "./realdeal.scss";

export const RealDeal: React.FC = () => {
  return (
    <section className="real-deal">
      <Wrapper>
        <div className="real-deal__box">
          <div className="real-deal__text">
            <div className="real-deal__title">
              <h1>The real deal</h1>
            </div>
            <div className="real-deal__desc">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success. We are
              visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </div>
          </div>
          <picture>
            <source media="(max-width:480px)" srcSet={imgMob} />
            <source media="(max-width:999px)" srcSet={imgTab} />
            <img
              className="real-deal__img"
              src={imgDesk}
              alt="the real deal image"
            />
          </picture>
        </div>
      </Wrapper>
    </section>
  );
};
