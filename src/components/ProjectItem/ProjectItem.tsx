import React from "react";
import { IProjectItem } from "../../types";

import "./projectitem.scss";

export const ProjectItem: React.FC<IProjectItem> = ({ title, desc, img }) => {
  return (
    <div className="project-item">
      <img className="project-item__img" src={require(img)} alt={title} />
      <div className="project-item__box">
        <div className="project-item__title">
          <h2>{title}</h2>
        </div>
        <div className="project-item__desc">{desc}</div>
      </div>
    </div>
  );
};
