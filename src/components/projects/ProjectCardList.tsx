"use client";

import { ProjectsType } from "@/utils/project_json_data";
import React, { useState } from "react";
import ProjectCardItem from "./ProjectCardItem";

type ProjectCardListProps = {
  title: string;
  projects: ProjectsType;
};

const ProjectCardList = ({ title, projects }: ProjectCardListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const titleRef = React.useRef<HTMLDivElement>(null);

  // Calculate pagination values
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    // Gunakan setTimeout untuk memastikan DOM sudah diupdate
    setTimeout(() => {
      if (titleRef.current) {
        const navbarHeight = 80;
        const elementTop = titleRef.current.offsetTop;

        // Scroll ke posisi title dikurangi tinggi navbar
        window.scrollTo({
          top: elementTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <div className="flex flex-col">
      <div ref={titleRef} className="group mb-8 flex flex-row items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <div className="relative">
            <div className="absolute h-1 w-0 rounded-full bg-slate-800 transition-all duration-300 group-hover:w-full" />
            <div className="h-1 w-24 rounded-full bg-slate-800" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {currentProjects.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`cursor-pointer rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-slate-800 text-white shadow-md hover:bg-red-600"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-300 hover:text-slate-800"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCardList;
