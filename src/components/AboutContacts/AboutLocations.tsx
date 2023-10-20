import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { ContactCards } from "../ContactCards/ContactCards";

export const AboutContact: React.FC = () => {
  return (
    <section className="about-locations">
      <Wrapper>
        <ContactCards />
      </Wrapper>
    </section>
  );
};
