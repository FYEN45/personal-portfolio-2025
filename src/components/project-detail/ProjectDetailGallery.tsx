"use client";

import { ProjectsType } from "@/utils/project_json_data";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type ProjectDetailGalleryProps = {
  images: ProjectsType[number]["images"];
};

const ProjectDetailGallery = (props: ProjectDetailGalleryProps) => {
  const [thumbnailPosition, setThumbnailPosition] = useState<
    "bottom" | "right"
  >("right");

  useEffect(() => {
    const handleResize = () => {
      setThumbnailPosition(window.innerWidth < 768 ? "bottom" : "right");
    };

    // Set initial position
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images: ReactImageGalleryItem[] = props.images.map((img) => {
    return {
      original: img.imageUrl,
      thumbnail: img.imageUrl,
      originalAlt: img.imageName,
      thumbnailAlt: img.imageName,
    };
  });

  return (
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-4 py-4">
      <ImageGallery
        items={images}
        infinite={true}
        lazyLoad={true}
        showPlayButton={false}
        showBullets={true}
        showFullscreenButton={false}
        showThumbnails={true}
        slideInterval={2000}
        slideOnThumbnailOver={false}
        thumbnailPosition={thumbnailPosition}
        useBrowserFullscreen={false}
        renderItem={(item) => (
          <Image
            src={item.original}
            alt={item.originalAlt ?? "alt"}
            width={1600}
            height={900}
            className="aspect-video h-auto w-full rounded-lg object-cover object-center shadow-md"
          />
        )}
        renderThumbInner={(item) => (
          <Image
            src={item.thumbnail ?? ""}
            alt={item.thumbnailAlt ?? "alt"}
            width={1600}
            height={900}
            className="aspect-video h-auto w-full rounded-lg object-cover object-center shadow-sm"
          />
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            className="group absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={onClick}
            disabled={disabled}
          >
            <IoArrowForwardCircleOutline
              className="text-slate-300 transition-colors duration-300 group-hover:text-white group-disabled:scale-90 group-disabled:opacity-60"
              size={48}
            />
          </button>
        )}
        renderLeftNav={(onClick, disabled) => (
          <button
            className="group absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={onClick}
            disabled={disabled}
          >
            <IoArrowBackCircleOutline
              className="text-slate-300 transition-colors duration-300 group-hover:text-white group-disabled:scale-90 group-disabled:opacity-60"
              size={48}
            />
          </button>
        )}
      />
    </div>
  );
};

export default ProjectDetailGallery;
