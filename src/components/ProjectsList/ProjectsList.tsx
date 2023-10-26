import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { ProjectItem } from "../ProjectItem/ProjectItem";
<<<<<<< HEAD
import { ProjectListProps } from "../../types";

import "./projectlist.scss";

export const ProjectsList: React.FC<ProjectListProps> = ({ projectList }) => {
=======
import { ProjectsListProps } from "../../types";

import "./projectlist.scss";

export const ProjectsList: React.FC<ProjectsListProps> = ({ projectList }) => {
>>>>>>> refs/remotes/origin/main
  return (
    <section className="project-list">
      <Wrapper>
        <div className="project-list__box">
          {projectList.map((project, id) => {
            return (
              <ProjectItem
                key={id}
                title={project.title}
                desc={project.desc}
                img={project.img}
              />
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};
