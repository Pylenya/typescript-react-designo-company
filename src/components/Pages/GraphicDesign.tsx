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

import webdesignDesk from "../../images/home/desktop/image-web-design-small.jpg";
import webdesignTab from "../../images/home/tablet/image-web-design.jpg";
import webdesignMob from "../../images/home/mobile/image-web-design.jpg";

import { IProjectItem } from "../../types";

export const GraphicDesign: React.FC = () => {
  const GraphicDesignProjestList: IProjectItem[] = [
    {
      title: "tim brown",
      desc: "A book cover designed for Tim Brown’s new release, ‘Change’",
      img: "../../src/images/graphic-design/image-change.jpg",
    },
    {
      title: "boxed water",
      desc: "A simple packaging concept made for Boxed Water",
      img: "../../src/images/graphic-design/image-boxed-water.jpg",
    },
    {
      title: "science!",
      desc: "A poster made in collaboration with the Federal Art Project",
      img: "../../src/images/graphic-design/image-science.jpg",
    },
  ];
  return (
    <>
      <Header />
      <DirectionHeader
        title="Graphic Design"
        desc="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <ProjectsList projectList={GraphicDesignProjestList} />
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
              title="web design"
              slug="/web-design"
              imgDesk={webdesignDesk}
              imgTab={webdesignTab}
              imgMob={webdesignMob}
            />
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};
