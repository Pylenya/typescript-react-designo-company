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
      <img className="card__img" src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      {desc && <p className="card__desc">{desc}</p>}
    </div>
  );
};
