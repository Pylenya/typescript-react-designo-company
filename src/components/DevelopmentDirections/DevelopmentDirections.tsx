import React from "react";
import { DevelopmentDirection } from "../DevelopmentDirection/DevelopmentDirection";

import webdesignDesk from "../../images/home/desktop/image-web-design-large.jpg";
import webdesignTab from "../../images/home/tablet/image-web-design.jpg";
import webdesignMob from "../../images/home/mobile/image-web-design.jpg";

import appdesignDesk from "../../images/home/desktop/image-app-design.jpg";
import appdesignTab from "../../images/home/tablet/image-app-design.jpg";
import appdesignMob from "../../images/home/mobile/image-app-design.jpg";

import graphicdesignDesk from "../../images/home/desktop/image-graphic-design.jpg";
import graphicdesignTab from "../../images/home/tablet/image-graphic-design.jpg";
import graphicdesignMob from "../../images/home/mobile/image-graphic-design.jpg";

import "./developmentdirections.scss";
import { Wrapper } from "../Wrapper/Wrapper";

export const DevelopmentDirections: React.FC = () => {
  return (
    <section className="development-directions">
      <Wrapper>
        <div className="links links--home">
          <DevelopmentDirection
            title="web design"
            slug="/web-design"
            imgDesk={webdesignDesk}
            imgTab={webdesignTab}
            imgMob={webdesignMob}
          />
          <DevelopmentDirection
            title="app design"
            slug="/app-design"
            imgDesk={appdesignDesk}
            imgTab={appdesignTab}
            imgMob={appdesignMob}
          />
          <DevelopmentDirection
            title="graphic design"
            slug="/graphic-design"
            imgDesk={graphicdesignDesk}
            imgTab={graphicdesignTab}
            imgMob={graphicdesignMob}
          />
        </div>
      </Wrapper>
    </section>
  );
};
