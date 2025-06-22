"use client";

import React from "react";
import Image from "next/image";
import { ProjectsType } from "@/utils/project_json_data";
import { GetTechStacksData } from "@/utils/tech_stacks_json_data";

type ProjectDetailTechProps = {
  techStacks: ProjectsType[number]["techStacks"];
};

const ProjectDetailTech = (props: ProjectDetailTechProps) => {
  const techStacksData = GetTechStacksData();

  const currentTech = techStacksData.filter((tech) =>
    props.techStacks.includes(tech.slug),
  );

  return (
    <div className="mt-4 flex w-full flex-row flex-wrap items-center gap-4">
      {currentTech.map((tech, index) => {
        return (
          <div
            className="group relative flex flex-row items-center gap-2.5 rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            key={index}
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-md bg-slate-50">
              <Image
                src={tech.imgSrc}
                alt={tech.name}
                width={150}
                height={150}
                loading="lazy"
                className="aspect-square h-full w-full object-contain object-center p-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <span className="text-sm font-medium text-slate-900">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetailTech;
