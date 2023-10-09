import React from "react";
import { Header } from "./components/Header/Header";
import "./style.scss";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Hero } from "./components/Hero/Hero";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
    </Wrapper>
  );
};
export default App;
