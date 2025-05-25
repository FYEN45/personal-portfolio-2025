import personalProjectData from "../constant/personal_project.json";
import workProjectData from "../constant/work_project.json";

export type ProjectsType = Array<{
  id: number;
  disabled: boolean;
  projectSlug: string;
  projectName: string;
  projectDescription: string;
  projectStatus: string;
  repoUrl: string;
  liveUrl: string;
  techStacks: Array<string>;
  images: Array<{
    imageName: string;
    imageUrl: string;
    imageDescription: string;
  }>;
  features: Array<{
    featureName: string;
    featureDescription: string;
  }>;
}>;

export const GetPersonalProjectData = () => {
  const projects: ProjectsType = personalProjectData;
  return projects;
};

export const GetWorkProjectData = () => {
  const projects: ProjectsType = workProjectData;
  return projects;
};

export const GetAllProjectsData = () => {
  const allProjects: ProjectsType = [
    ...GetPersonalProjectData(),
    ...GetWorkProjectData(),
  ];
  return allProjects;
};
