import React from "react";
import "./developmentdirection.scss";
import { Link } from "react-router-dom";

interface DevelopmentDirectionProps {
  title: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  slug: string;
}

export const DevelopmentDirection: React.FC<DevelopmentDirectionProps> = ({
  title,
  imgMob,
  imgTab,
  imgDesk,
  slug,
}) => {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className="link__item"
      to={slug}
    >
      <picture>
        <source media="(max-width:480px)" srcSet={imgMob} />
        <source media="(max-width:999px)" srcSet={imgTab} />
        <img className="link__img" src={imgDesk} alt={title} />
      </picture>
      <div className="link__text">
        <p className="link__title">{title}</p>
        <span className="link__desc">View Projects</span>
      </div>
    </Link>
  );
};
