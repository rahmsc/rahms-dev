import { poppins, robotoMono } from "./fonts/fonts";
import type { Metadata } from "next";
import "./product.css";
import Navbar from "@/components/product-components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { HotJar } from "@/components/product-components/Hotjar";

export const metadata: Metadata = {
  title: "SOLVR",
  description:
    "Revolutionise your business with cutting-edge AI & custom software solutions",
  icons: {
    icon: "/solvr_logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable}`}>
      <body className="font-body">
        <Navbar />
        {children}
        <HotJar />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      </body>
    </html>
  );
};

export default RootLayout;
