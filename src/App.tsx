import React from "react";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Hero } from "./components/Hero/Hero";
import { DevelopmentDirections } from "./components/DevelopmentDirections/DevelopmentDirections";
import { Benefits } from "./components/Benefits/Benefits";
import "./style.scss";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <DevelopmentDirections />
      <Benefits />
    </Wrapper>
  );
};
export default App;
