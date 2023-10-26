import React from "react";

import { Header } from "../Header/Header";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactCards } from "../ContactCards/ContactCards";
import { Wrapper } from "../Wrapper/Wrapper";
import { Footer } from "../Footer/Footer";

export const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <Wrapper>
        <ContactCards />
      </Wrapper>
      <Footer />
    </>
  );
};
