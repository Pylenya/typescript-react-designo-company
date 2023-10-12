import React from "react";
import "./benefits.scss";
import { BeneftisCards } from "../BenefitsCard/BeneftisCards";
import { Wrapper } from "../Wrapper/Wrapper";

export const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <Wrapper>
        <BeneftisCards />
      </Wrapper>
    </section>
  );
};
