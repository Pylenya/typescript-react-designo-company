import React from "react";

import { Card } from "../Card/Card";
import canadaIMG from "../../images/svg/illustration-canada.svg";
import australiaIMG from "../../images/svg/illustration-australia.svg";
import unitedKingdomIMG from "../../images/svg/illustration-united-kingdom.svg";

import "./contactcards.scss";

export const ContactCards: React.FC = () => {
  return (
    <div className="locations__box">
      <Card
        image={canadaIMG}
        title="CANADA"
        btn={true}
        btnText="SEE LOCATION"
        slug="/locations"
      />
      <Card
        image={australiaIMG}
        title="AUSTRALIA"
        btn={true}
        btnText="SEE LOCATION"
        slug="/locations"
      />
      <Card
        image={unitedKingdomIMG}
        title="UNITED KINGDOM"
        btn={true}
        btnText="SEE LOCATION"
        slug="/locations"
      />
    </div>
  );
};
