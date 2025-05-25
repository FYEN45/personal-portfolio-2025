import React from "react";

const Footer = async () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-900">
      <div className="container mx-auto flex h-12 w-full max-w-(--breakpoint-xl) items-center justify-center">
        <span className="text-xs font-semibold text-gray-200">
          &copy; FYEN&apos;s Copyright {currentYear}
        </span>
      </div>
    </div>
  );
};

export default Footer;
