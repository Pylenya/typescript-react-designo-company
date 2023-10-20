import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import { IProjestList } from "../../types";
import "./projectlist.scss";

interface ProjectsListProps {
  projectList: IProjestList[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projectList }) => {
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
