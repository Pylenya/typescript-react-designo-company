import React from "react";
import "./card.scss";
import { Button } from "../Button/Button";
interface CardProps {
  title: string;
  image: string;
  desc?: string;
  btn?: boolean;
  btnText?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  desc,
  image,
  btn,
  btnText,
}) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={title} />
      </div>
      <div className="card__text">
        <h2 className="card__title">{title}</h2>
        {desc && <p className="card__desc">{desc}</p>}
        {btn && btnText && <Button backgroundColor="pear">{btnText}</Button>}
      </div>
    </div>
  );
};
