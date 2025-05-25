import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import "react-multi-carousel/lib/styles.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FYENDEV",
  description: "A personal portfolio website showcasing Ferry Gunawan projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} relative antialiased`}>
        <Navbar />
        <div className="min-h-[calc(100dvh-128px)] w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
