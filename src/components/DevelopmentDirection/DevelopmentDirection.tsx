import React from "react";
import "./developmentdirection.scss";

interface DevelopmentDirectionProps {
  title: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
}

export const DevelopmentDirection: React.FC<DevelopmentDirectionProps> = ({
  title,
  imgMob,
  imgTab,
  imgDesk,
}) => {
  return (
    <div className="link__item">
      <picture>
        <source media="(max-width:480px)" srcSet={imgMob} />
        <source media="(max-width:999px)" srcSet={imgTab} />
        <img className="link__img" src={imgDesk} alt={title} />
      </picture>
      <div className="link__text">
        <p className="link__title">{title}</p>
        <span className="link__desc">View Projects</span>
      </div>
    </div>
  );
};
