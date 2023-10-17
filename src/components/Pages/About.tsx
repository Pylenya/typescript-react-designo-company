import React from "react";

import { Header } from "../Header/Header";
import { AboutHero } from "../AboutHero/AboutHero";
import { Talent } from "../Talent/Talent";
import { AboutContact } from "../AboutContacts/AboutLocations";
import { RealDeal } from "../RealDeal/RealDeal";
import { Footer } from "../Footer/Footer";

export const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <Talent />
      <AboutContact />
      <RealDeal />
      <Footer />
    </>
  );
};
