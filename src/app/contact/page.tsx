import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
  username: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ferry-gunawan",
    icon: FaLinkedin,
    username: "Ferry Gunawan",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
    iconColor: "text-blue-600",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+6281234567890", // Ganti dengan nomor WhatsApp Anda
    icon: FaWhatsapp,
    username: "+62 812-3456-7890", // Ganti dengan nomor WhatsApp Anda
    gradientFrom: "from-green-500",
    gradientTo: "to-green-700",
    iconColor: "text-green-600",
  },

  {
    name: "Instagram",
    href: "https://instagram.com/FerryGun45",
    icon: FaInstagram,
    username: "@FerryGun45",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    iconColor: "text-pink-600",
  },
  {
    name: "GitHub",
    href: "https://github.com/FerryGun45",
    icon: FaGithub,
    username: "@FerryGun45",
    gradientFrom: "from-slate-700",
    gradientTo: "to-slate-900",
    iconColor: "text-slate-900",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100dvh-128px)] bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Let&apos;s Connect!
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
            Feel free to reach out through any of these platforms. I&apos;m
            always open to new opportunities and connections!
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradientFrom} ${social.gradientTo} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
                />
                <div className="relative flex flex-col items-center gap-4">
                  <Icon
                    className={`h-12 w-12 ${social.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {social.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {social.username}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
