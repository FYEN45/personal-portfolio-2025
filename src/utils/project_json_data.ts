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
  stagingUrl?: string;
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

const filterProjects = (projects: ProjectsType) => {
  // Filter out projects that are disabled
  const filteredProjects = projects.filter((project) => !project.disabled);

  // Sort projects by id in descending order
  filteredProjects.sort((a, b) => b.id - a.id);

  return filteredProjects;
};

export const GetPersonalProjectData = () => {
  const projects: ProjectsType = personalProjectData;
  return filterProjects(projects);
};

export const GetWorkProjectData = () => {
  const projects: ProjectsType = workProjectData;
  return filterProjects(projects);
};

export const GetAllProjectsData = () => {
  const allProjects: ProjectsType = [
    ...GetPersonalProjectData(),
    ...GetWorkProjectData(),
  ];
  return allProjects;
};
