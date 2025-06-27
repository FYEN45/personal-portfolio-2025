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
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type ProjectDetailGalleryProps = {
  images: ProjectsType[number]["images"];
};

const ProjectDetailGallery = (props: ProjectDetailGalleryProps) => {
  const [thumbnailPosition, setThumbnailPosition] = useState<
    "bottom" | "right"
  >("right");
  const [index, setIndex] = useState(-1);
  const [gallery, setGallery] = useState<ImageGallery | null>(null);

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
      description: img.imageDescription || "",
      thumbnailLabel: img.imageName,
    };
  });

  const slides = images.map(({ original, originalAlt, description }) => ({
    src: original,
    alt: originalAlt,
    title: originalAlt,
    description,
  }));

  return (
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-4 py-4">
      <ImageGallery
        ref={(el) => setGallery(el)}
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
        onClick={() => {
          if (gallery) {
            setIndex(gallery.getCurrentIndex());
          }
        }}
        renderItem={(item) => (
          <div className="group relative cursor-pointer">
            <Image
              src={item.original}
              alt={item.originalAlt ?? "alt"}
              width={1600}
              height={900}
              className="aspect-video h-auto w-full rounded-lg bg-slate-800/50 object-cover object-top shadow-md"
            />
            {(item.originalAlt || item.description) && (
              <div className="absolute bottom-0 w-full bg-black/60 p-2 text-center text-white transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                {item.originalAlt && (
                  <div className="text-lg font-bold">{item.originalAlt}</div>
                )}
                {item.description && (
                  <div className="hidden text-sm md:block">
                    {item.description}
                  </div>
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
            className="aspect-video h-auto w-full bg-slate-500 object-cover object-top"
          />
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            className="group absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={onClick}
            disabled={disabled}
          >
            <IoArrowForwardCircleOutline className="h-9 w-9 text-slate-300 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.65)] group-disabled:scale-90 group-disabled:opacity-60 md:h-12 md:w-12" />
          </button>
        )}
        renderLeftNav={(onClick, disabled) => (
          <button
            className="group absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={onClick}
            disabled={disabled}
          >
            <IoArrowBackCircleOutline className="h-9 w-9 text-slate-300 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.65)] group-disabled:scale-90 group-disabled:opacity-60 md:h-12 md:w-12" />
          </button>
        )}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default ProjectDetailGallery;
