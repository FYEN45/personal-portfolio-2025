"use client";

import { GetTechStacksData } from "@/utils/tech_stacks_json_data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";

const TechStacksSection = () => {
  const techStacks = GetTechStacksData().filter(({ disabled }) => !disabled);

  const responsive = {
    xl: {
      breakpoint: { max: 4000, min: 1024 },
      items: 10,
    },
    lg: {
      breakpoint: { max: 1024, min: 768 },
      items: 8,
    },
    md: {
      breakpoint: { max: 768, min: 640 },
      items: 6,
    },
    sm: {
      breakpoint: { max: 640, min: 0 },
      items: 4,
    },
  };

  return (
    <div className="mt-16 w-full bg-slate-100">
      <div className="mx-auto max-w-(--breakpoint-2xl)">
        <Carousel
          ssr={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={0}
          keyBoardControl={false}
          customTransition="transform 5000ms linear"
          transitionDuration={5000}
          pauseOnHover={true}
        >
          {techStacks.map((tech, index) => (
            <div
              className="flex max-h-32 w-full items-center justify-center p-6"
              key={index}
            >
              <Image
                src={tech.imgSrc ?? null}
                alt={tech.slug}
                width={400}
                height={400}
                className="aspect-video h-auto w-full object-contain object-center"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TechStacksSection;
