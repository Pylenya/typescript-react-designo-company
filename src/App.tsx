import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { DevelopmentDirections } from "./components/DevelopmentDirections/DevelopmentDirections";
import { Benefits } from "./components/Benefits/Benefits";
import { Footer } from "./components/Footer/Footer";
import "./style.scss";

const App: React.FC = () => {
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
export default App;
