import React from "react";

import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { DevelopmentDirections } from "../DevelopmentDirections/DevelopmentDirections";
import { Benefits } from "../Benefits/Benefits";
import { Footer } from "../Footer/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <DevelopmentDirections />
      <Benefits />
      <Footer />
    </>
  );
};
