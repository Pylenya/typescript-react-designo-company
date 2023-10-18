import React from "react";

import { Wrapper } from "../Wrapper/Wrapper";
import { Card } from "../Card/Card";

import canadaIMG from "../../images/svg/illustration-canada.svg";
import australiaIMG from "../../images/svg/illustration-australia.svg";
import unitedKingdomIMG from "../../images/svg/illustration-united-kingdom.svg";

import "./aboutlocations.scss";

export const AboutContact: React.FC = () => {
  return (
    <section className="about-locations">
      <Wrapper>
        <div className="about-locations__box">
          <Card
            image={canadaIMG}
            title="CANADA"
            btn={true}
            btnText="SEE LOCATION"
          />
          <Card
            image={australiaIMG}
            title="AUSTRALIA"
            btn={true}
            btnText="SEE LOCATION"
          />
          <Card
            image={unitedKingdomIMG}
            title="UNITED KINGDOM"
            btn={true}
            btnText="SEE LOCATION"
          />
        </div>
      </Wrapper>
    </section>
  );
};
