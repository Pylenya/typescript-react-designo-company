export interface IProjectItem {
  title: string;
  desc: string;
  img: string;
}

export interface ProjectsListProps {
  projectList: IProjectItem[];
}
