import React from "react";
import "./card.scss";
interface CardProps {
  title: string;
  image: string;
  desc?: string;
  btn?: boolean;
}

export const Card: React.FC<CardProps> = ({ title, desc, image }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={title} />
      </div>
      <div className="card__text">
        <h2 className="card__title">{title}</h2>
        {desc && <p className="card__desc">{desc}</p>}
      </div>
    </div>
  );
};
