import type { Metadata } from "next";
import HeroSection from "@/components/product-components/hero/HeroSection";
import BusinessPotential from "@/components/product-components/BusinessPotential";
import TransformBusiness from "@/components/product-components/TransformBusiness";
import AiExpertise from "@/components/product-components/AiExpertise";
import HowItWorks from "@/components/product-components/HowItWorks";
import Testimonials from "@/components/product-components/Testimonials";
import FAQ from "@/components/product-components/FAQ";
import BookCall from "@/components/product-components/BookCall";
import StructuredData from "@/components/product-components/StructuredData";

export const metadata: Metadata = {
  title: "SOLVR | Transform Your Business Potential",
  description:
    "Leverage our AI expertise to transform your business. Discover how our solutions can unlock your business potential and drive growth.",
  keywords: [
    "AI business solutions",
    "business transformation",
    "artificial intelligence consulting",
    "AI expertise",
    "business growth",
    "AI implementation",
    "digital transformation",
    "business automation",
    "solvr",
    "custom ai solutions",
    "custom software solutions",
    "ai consulting",
    "ai implementation",
    "ai consulting services",
    "ai consulting firm",
    "ai consulting company",
  ],
  authors: [{ name: "SOLVR" }],
  creator: "SOLVR",
  publisher: "SOLVR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
  alternates: {
    canonical: "https://solvr-landing.vercel.app",
  },
  openGraph: {
    title: "SOLVR | Transform Your Business Potential",
    description:
      "Leverage our AI expertise to transform your business. Discover how our solutions can unlock your business potential and drive growth.",
    type: "website", // Add this
    locale: "en_US", // Add this
    siteName: "SOLVR", // Add this
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SOLVR - Transform Your Business Potential",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLVR | Transform Your Business Potential",
    description:
      "Leverage our AI expertise to transform your business. Discover how our solutions can unlock your business potential and drive growth.",
    images: ["/og-image.jpg"],
    creator: "@rahmsc_", // Add this
    site: "@rahmsc_",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <HeroSection />
        <BusinessPotential />
        <AiExpertise />
        <TransformBusiness />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <BookCall />
      </main>
    </>
  );
}
