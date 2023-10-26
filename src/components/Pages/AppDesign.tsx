import React from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { DirectionHeader } from "../DirectionHeader/DirectionHeader";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import { DevelopmentDirection } from "../DevelopmentDirection/DevelopmentDirection";
import { Wrapper } from "../Wrapper/Wrapper";

import webdesignDesk from "../../images/home/desktop/image-web-design-small.jpg";
import webdesignTab from "../../images/home/tablet/image-web-design.jpg";
import webdesignMob from "../../images/home/mobile/image-web-design.jpg";

import graphicdesignDesk from "../../images/home/desktop/image-graphic-design.jpg";
import graphicdesignTab from "../../images/home/tablet/image-graphic-design.jpg";
import graphicdesignMob from "../../images/home/mobile/image-graphic-design.jpg";
import { IProjectItem } from "../../types";

export const AppDesign: React.FC = () => {
  const AppDesignProjestList: IProjectItem[] = [
    {
      title: "air filter",
      desc: "Solving the problem of poor indoor air quality by filtering theair",
      img: "../../src/images/app-design/image-airfilter.jpg",
    },
    {
      title: "eyecam",
      desc: "Product that lets you edit your favorite photos and videos atany time",
      img: "../../src/images/app-design/image-eyecam.jpg",
    },
    {
      title: "faceit",
      desc: "Get to meet your favorite internet superstar with the faceit app",
      img: "../../src/images/app-design/image-faceit.jpg",
    },
    {
      title: "todo",
      desc: "A todo app that features cloud sync with light and dark mode",
      img: "../../src/images/app-design/image-todo.jpg",
    },
    {
      title: "loopstudios",
      desc: "A VR experience app made for Loopstudios",
      img: "../../src/images/app-design/image-loopstudios.jpg",
    },
  ];
  return (
    <>
      <Header />
      <DirectionHeader
        title="App Design"
        desc="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <ProjectsList projectList={AppDesignProjestList} />
      <div className="other-projects">
        <Wrapper>
          <div className="links links--other">
            <DevelopmentDirection
              title="web design"
              slug="/web-design"
              imgDesk={webdesignDesk}
              imgTab={webdesignTab}
              imgMob={webdesignMob}
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
