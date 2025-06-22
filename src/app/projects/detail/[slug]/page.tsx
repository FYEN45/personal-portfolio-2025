import ProjectDetailGallery from "@/components/project-detail/ProjectDetailGallery";
import ProjectDetailTech from "@/components/project-detail/ProjectDetailTech";
import { GetAllProjectsData } from "@/utils/project_json_data";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const projectSlug = (await params).slug;

  const allProjects = GetAllProjectsData();
  const currentProject = allProjects.find(
    (project) => project.projectSlug === projectSlug,
  );

  // If the project is not found, redirect to the home page.
  if (!currentProject) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="w-full bg-slate-200">
        {currentProject.images.length > 1 ? (
          <ProjectDetailGallery images={currentProject.images} />
        ) : (
          <div className="mx-auto w-full max-w-(--breakpoint-xl) px-4 py-4">
            <div className="">
              <Image
                src={currentProject.images[0].imageUrl}
                alt={currentProject.images[0].imageName}
                width={1600}
                height={900}
                className="aspect-video h-auto w-full rounded-lg bg-slate-500 object-contain object-center shadow-md"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto w-full max-w-(--breakpoint-2xl) p-4">
        <div className="mt-8 flex flex-1 flex-col justify-end gap-2">
          <h1 className="text-4xl font-bold text-slate-900">
            {currentProject.projectName}
          </h1>

          <div>
            <Link
              href={currentProject.liveUrl}
              className="group flex w-fit flex-row items-center gap-2 rounded-lg bg-red-500 px-4 py-2 transition-all duration-300 hover:bg-red-600"
            >
              <span className="text-sm font-medium text-white">
                Visit Website
              </span>
              <MdArrowRightAlt
                size={20}
                color="#FFFFFF"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <div className="group flex w-fit flex-col">
            <h2 className="text-2xl font-bold text-slate-900">Tech Stacks</h2>
            <div className="mt-1 h-1 w-28 rounded-full bg-slate-800 transition-all duration-300 group-hover:w-36" />
          </div>
          <div className="mt-6">
            <ProjectDetailTech techStacks={currentProject.techStacks} />
          </div>
        </div>

        <div className="mt-12">
          <div className="group flex w-fit flex-col">
            <h2 className="text-2xl font-bold text-slate-900">Description</h2>
            <div className="mt-1 h-1 w-28 rounded-full bg-slate-800 transition-all duration-300 group-hover:w-36" />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            {currentProject.projectDescription}
          </p>
        </div>

        {currentProject.features.length > 0 && (
          <div className="mt-12">
            <div className="group flex w-fit flex-col">
              <h2 className="text-2xl font-bold text-slate-900">Features</h2>
              <div className="mt-1 h-1 w-20 rounded-full bg-slate-800 transition-all duration-300 group-hover:w-28" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {currentProject.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.featureName}
                  </h3>
                  <p className="text-base text-slate-600">
                    {feature.featureDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
