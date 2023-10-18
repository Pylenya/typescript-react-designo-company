import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { LocationList } from "../LocationList/LocationList";

export const Locations: React.FC = () => {
  return (
    <>
      <Header />
      <LocationList />
      <Footer />
    </>
  );
};
