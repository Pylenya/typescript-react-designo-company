import React from "react";
import "./benefits.scss";
import { BeneftisCards } from "../BenefitsCard/BeneftisCards";

export const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <BeneftisCards />
    </section>
  );
};
