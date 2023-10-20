import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import { Wrapper } from "../Wrapper/Wrapper";
import LocationItem from "../LocationItem/LocationItem";

import "./locationlist.scss";

export const LocationList: React.FC = () => {
  return (
    <section className="location-list">
      <Wrapper>
        <YMaps>
          <div className="location-list__box">
            <LocationItem
              coordinates={[43.645452, -79.388416]}
              country="Canada"
              fullAddress="3886 Wellington Street Toronto, Ontario M9C 3J5"
              officeName="Designo Central Office"
              phoneNumber="+1 253-863-8967"
              email="contact@designo.co"
            />
            <LocationItem
              coordinates={[-30.326287, 149.782701]}
              country="Australia"
              fullAddress="19 Balonne Street New South Wales 2443"
              officeName="Designo AU Office"
              phoneNumber="(02) 6720 9092"
              email="contact@designo.au"
            />
            <LocationItem
              coordinates={[51.736603, -3.861687]}
              country="United Kingdom"
              fullAddress="13 Colorado Way Rhyd-y-fro SA8 9GA"
              officeName="Designo UK Office"
              phoneNumber="078 3115 1400"
              email="contact@designo.uk"
            />
          </div>
        </YMaps>
      </Wrapper>
    </section>
  );
};
