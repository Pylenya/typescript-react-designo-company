import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

import "./card.scss";

interface CardProps {
  title: string;
  image: string;
  desc?: string;
  btn?: boolean;
  btnText?: string;
  slug?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  desc,
  image,
  btn,
  btnText,
  slug,
}) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={title} />
      </div>
      <div className="card__text">
        <h2 className="card__title">{title}</h2>
        {desc && <p className="card__desc">{desc}</p>}
        {btn && btnText && (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to={slug ? slug : "/home"}
          >
            <Button backgroundColor="pear">{btnText}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
