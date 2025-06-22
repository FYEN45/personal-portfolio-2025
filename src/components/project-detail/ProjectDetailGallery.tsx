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

// Custom styles for the image gallery thumbnails only
const customGalleryStyles = `
  .image-gallery-thumbnail {
    border-radius: 0.5rem !important;
    overflow: hidden !important;
    transition: border-color 0.3s ease;
  }

  .image-gallery-thumbnail.active {    
    border-color: #3b82f6 !important; /* Blue border color for active state */
  }
  
  .image-gallery-thumbnail:hover {    
    border-color: #60a5fa !important; /* Lighter blue border color for hover state */
  }
`;

type ProjectDetailGalleryProps = {
  images: ProjectsType[number]["images"];
};

const ProjectDetailGallery = (props: ProjectDetailGalleryProps) => {
  const [thumbnailPosition, setThumbnailPosition] = useState<
    "bottom" | "right"
  >("right");

  // Add custom styles to the document head
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");
    styleElement.innerHTML = customGalleryStyles;
    document.head.appendChild(styleElement);

    // Cleanup function
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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
      description: img.imageDescription || "", // Add description
      thumbnailLabel: img.imageName, // Add label for accessibility
    };
  });  return (
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-4 py-4">
      <ImageGallery
        items={images}
        infinite={true}
        lazyLoad={true}
        showPlayButton={false}
        showBullets={false}
        showFullscreenButton={false}
        showThumbnails={true}
        slideInterval={2000}
        slideOnThumbnailOver={false}
        thumbnailPosition={thumbnailPosition}
        useBrowserFullscreen={false}
        renderItem={(item) => (
          <div className="relative group">
            <Image
              src={item.original}
              alt={item.originalAlt ?? "alt"}
              width={1600}
              height={900}
              className="aspect-video h-auto w-full rounded-lg bg-slate-500 object-contain object-center shadow-md"
            />
            {(item.originalAlt || item.description) && (
              <div className="absolute bottom-0 w-full bg-black/60 p-2 text-center text-white transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                {item.originalAlt && (
                  <div className="text-lg font-bold">{item.originalAlt}</div>
                )}
                {item.description && (
                  <div className="text-sm hidden md:block">{item.description}</div>
                )}
              </div>
            )}
          </div>
        )}
        renderThumbInner={(item) => (
          <Image
            src={item.thumbnail ?? ""}
            alt={item.thumbnailAlt ?? "alt"}
            width={1600}
            height={900}
            className="aspect-video h-auto w-full bg-slate-500 object-contain object-center shadow-sm"
          />
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            className="group absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={onClick}
            disabled={disabled}
          >
            <IoArrowForwardCircleOutline
              className="text-slate-300 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.65)] group-disabled:scale-90 group-disabled:opacity-60"
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
              className="text-slate-300 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.65)] group-disabled:scale-90 group-disabled:opacity-60"
              size={48}
            />
          </button>
        )}
      />
    </div>
  );
};

export default ProjectDetailGallery;
