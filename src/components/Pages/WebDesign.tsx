import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { DirectionHeader } from "../DirectionHeader/DirectionHeader";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import { DevelopmentDirection } from "../DevelopmentDirection/DevelopmentDirection";
import { Wrapper } from "../Wrapper/Wrapper";

import appdesignDesk from "../../images/home/desktop/image-app-design.jpg";
import appdesignTab from "../../images/home/tablet/image-app-design.jpg";
import appdesignMob from "../../images/home/mobile/image-app-design.jpg";

import graphicdesignDesk from "../../images/home/desktop/image-graphic-design.jpg";
import graphicdesignTab from "../../images/home/tablet/image-graphic-design.jpg";
import graphicdesignMob from "../../images/home/mobile/image-graphic-design.jpg";

import { IProjectItem } from "../../types";

export const WebDesign: React.FC = () => {
  const WebDesignProjestList: IProjectItem[] = [
    {
      title: "express",
      desc: "A multi-carrier shipping website for ecommerce businesses",
      img: "web-design/image-express.jpg",
    },
    {
      title: "transfer",
      desc: "Site for low-cost money transfers and sending money withinseconds",
      img: "../../src/images/web-design/image-transfer.jpg",
    },
    {
      title: "photon",
      desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
      img: "../../src/images/web-design/image-photon.jpg",
    },
    {
      title: "builder",
      desc: "Connects users with local contractors based on their location",
      img: "../../src/images/web-design/image-builder.jpg",
    },
    {
      title: "blogr",
      desc: "Blogr is a platform for creating an online blog or publication",
      img: "../../src/images/web-design/image-blogr.jpg",
    },
    {
      title: "camp",
      desc: "Get expert training in coding, data, design, and digitalmarketing",
      img: "../../src/images/web-design/image-camp.jpg",
    },
  ];

  return (
    <>
      <Header />
      <DirectionHeader
        title="Web Design"
        desc="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <ProjectsList projectList={WebDesignProjestList} />
      <div className="other-projects">
        <Wrapper>
          <div className="links links--other">
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
      </div>
      <Footer />
    </>
  );
};
