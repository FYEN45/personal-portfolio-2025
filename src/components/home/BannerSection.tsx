import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <div className="relative h-[calc(100dvh-128px)] w-full items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center gap-2">
        <span className="text-center text-4xl font-semibold text-slate-100 drop-shadow-xl sm:text-5xl">
          <span className="text-orange-500">FYEN</span> PORTFOLIOS
        </span>
        <span className="text-md font-normal text-slate-100 sm:text-xl">
          Work & Personal related Projects
        </span>
      </div>

      <div className="absolute bottom-5 z-10 flex w-full flex-col items-center">
        <span className="text-xs font-normal text-gray-100 opacity-60">
          &copy;Unsplash - Ales Nesetril
        </span>
      </div>

      <Image
        src={"/images/banner.jpg"}
        alt="banner"
        width={1600}
        height={900}
        className="absolute top-0 left-0 h-full w-full scale-105 object-cover blur-xs"
      />
    </div>
  );
};

export default BannerSection;
