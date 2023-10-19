import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Locations } from "./components/Pages/Locations";
import { WebDesign } from "./components/Pages/WebDesign";
import { AppDesign } from "./components/Pages/AppDesign";
import { GraphicDesign } from "./components/Pages/GraphicDesign";
import { Contact } from "./components/Pages/Contact";

import "./style.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/app-design" element={<AppDesign />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
export default App;
