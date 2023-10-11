import React from "react";
import { Card } from "../Card/Card";

import passionateIMG from "../../images/svg/illustration-passionate.svg";
import resourcefulIMG from "../../images/svg/illustration-resourceful.svg";
import friendlyIMG from "../../images/svg/illustration-friendly.svg";

import "./benefitscards.scss";

export const BeneftisCards: React.FC = () => {
  return (
    <div className="benefits__cards">
      <Card
        title="PASSIONATE"
        image={passionateIMG}
        desc="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <Card
        title="RESOURCEFUL"
        image={resourcefulIMG}
        desc="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
      />
      <Card
        title="FRIENDLY"
        image={friendlyIMG}
        desc="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
      />
    </div>
  );
};
