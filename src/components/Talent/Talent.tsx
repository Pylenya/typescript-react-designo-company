import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";

import imgDesk from "../../images/about/desktop/image-world-class-talent.jpg";
import imgTab from "../../images/about/tablet/image-world-class-talent.jpg";
import imgMob from "../../images/about/mobile/image-world-class-talent.jpg";

import "./talent.scss";

export const Talent: React.FC = () => {
  return (
    <section className="talent">
      <Wrapper>
        <div className="talent__box">
          <picture>
            <source media="(max-width:480px)" srcSet={imgMob} />
            <source media="(max-width:999px)" srcSet={imgTab} />
            <img
              className="talent__img"
              src={imgDesk}
              alt="world-class talent image"
            />
          </picture>
          <div className="talent__text">
            <div className="talent__title">
              <h1>World-class talent</h1>
            </div>
            <div className="talent__desc">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms. Our team is
              multi-disciplinary and we are not merely interested in form —
              content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
