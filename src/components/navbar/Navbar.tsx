import Link from "next/link";
// import ScrollToTopBtn from "./ScrollToTopBtn";

const Navbar = () => {
  const links = [
    { href: "/projects", label: "Projects", target: "" },
    {
      href: "https://drive.google.com/drive/folders/1LTjwgm2kPJFbINAYdnOHmjhfmdVdjsT7?usp=sharing",
      label: "Certificates",
      target: "_blank",
    },
    { href: "/contact", label: "Contact", target: "" },
  ];

  return (
    <div
      id="navbar"
      className="sticky top-0 z-50 bg-slate-900 shadow-lg backdrop-blur-sm"
    >
      {/* BACK TO TOP */}
      {/* <ScrollToTopBtn /> */}

      {/* NAVBAR */}
      <div className="container mx-auto flex h-20 max-w-(--breakpoint-2xl) flex-row items-center justify-between px-4 md:px-8">
        {" "}
        <Link
          href="/"
          className="group text-xl font-bold text-white sm:text-2xl"
        >
          <span className="relative">
            <span>FYEN</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="text-orange-500">Dev</span>
        </Link>
        {/* NAVBAR DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group relative text-base font-medium tracking-wide text-gray-100 uppercase"
              target={link.target}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
