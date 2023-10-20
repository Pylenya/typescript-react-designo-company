import React from "react";
import { BeneftisCards } from "../BenefitsCard/BeneftisCards";
import { Wrapper } from "../Wrapper/Wrapper";

import "./benefits.scss";

export const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <Wrapper>
        <BeneftisCards />
      </Wrapper>
    </section>
  );
};
