import React from "react";
import { Home } from "./components/Pages/Home";
import "./style.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./components/Pages/About";
import { Locations } from "./components/Pages/Locations";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/web-design" element={<Home />} />
      <Route path="/app-design" element={<Home />} />
      <Route path="/graphic-design" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
export default App;
