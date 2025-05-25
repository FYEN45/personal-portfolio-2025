import React from "react";

import ProjectCardList from "@/components/projects/ProjectCardList";
import {
  GetPersonalProjectData,
  GetWorkProjectData,
} from "@/utils/project_json_data";

const ProjectsPage = async () => {
  const workProjects = GetWorkProjectData();
  const personalProjects = GetPersonalProjectData();

  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto flex flex-col gap-12 px-2 pt-12 pb-8 md:px-12">
        <ProjectCardList title="Work Projects" projects={workProjects} />
        <ProjectCardList title="Portfolios" projects={personalProjects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
