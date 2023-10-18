import React from "react";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import "./locationitem.scss";
interface LocationItemProps {
  coordinates: number[];
  country: string;
  officeName: string;
  fullAddress: string;
  phoneNumber: string;
  email: string;
}

export const LocationItem: React.FC<LocationItemProps> = ({
  coordinates,
  country,
  email,
  fullAddress,
  officeName,
  phoneNumber,
}) => {
  return (
    <div className="location-item">
      <div className="locatiion-info__map">
        <Map
          defaultState={{
            center: coordinates,
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          width={280}
          height={375}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={coordinates} />
        </Map>
      </div>
      <div className="location-item__card">
        <h2 className="location-item__title">{country}</h2>
        <div className="location-item__info">
          <div className="location-item__desc">
            <p style={{ fontWeight: 700, marginBottom: 5 }}>{officeName}</p>
            <p>{fullAddress}</p>
          </div>
          <div className="location-item__desc">
            <p style={{ fontWeight: 700, marginBottom: 5 }}>Contact</p>
            <p>
              <span>P : </span>
              {phoneNumber}
            </p>
            <p>
              <span>M : </span>
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LocationItem);
