import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import "./directionheader.scss";

interface DirectionHeaderProps {
  title: string;
  desc: string;
}

export const DirectionHeader: React.FC<DirectionHeaderProps> = ({
  title,
  desc,
}) => {
  return (
    <section className="direction-header">
      <Wrapper>
        <div className="direction-header__box">
          <div className="direction-header__title">
            <h1>{title}</h1>
          </div>
          <div className="direction-header__desc">
            <p>{desc}</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
