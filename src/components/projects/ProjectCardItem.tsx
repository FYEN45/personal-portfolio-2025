"use client";

import { ProjectsType } from "@/utils/project_json_data";
import { GetTechStacksData } from "@/utils/tech_stacks_json_data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

type ProjectCardItemProps = {
  project: ProjectsType[number];
};

const ProjectCardItem = ({ project }: ProjectCardItemProps) => {
  const techStacksData = GetTechStacksData();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={project.images[0].imageUrl}
        alt={project.images[0].imageName}
        loading="lazy"
        width={300}
        height={200}
        className="aspect-video h-auto w-full object-cover object-center"
      />

      <div className="flex grow flex-col gap-2 border-t border-slate-100 px-4 pt-2 pb-4">
        <span className="line-clamp-2 w-full overflow-hidden text-lg font-semibold text-ellipsis text-slate-800">
          {project.projectName}
        </span>

        <div className="flex flex-row flex-wrap gap-1">
          {project.techStacks.map((techSlug, index) => (
            <span
              key={index}
              className="rounded-md bg-slate-100 px-2 py-1 text-sm font-medium text-slate-600"
            >
              {techStacksData.find(({ slug }) => slug == techSlug)?.name}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={"/projects/detail/" + project.projectSlug}
            prefetch
            className="group flex w-fit flex-row items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2 transition-all duration-300 hover:bg-red-600"
          >
            <span className="text-sm font-medium text-white">Learn More</span>
            <MdArrowRightAlt
              size={20}
              color="#FFFFFF"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardItem;
