import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SOLVR",
    url: "https://solvr-landing.vercel.app",
    logo: "https://solvr-landing.vercel.app/logo.png",
    description:
      "Leverage our AI expertise to transform your business. Discover how our solutions can unlock your business potential and drive growth.",
    image: "https://solvr-landing.vercel.app/og-image.jpg",
    foundingDate: "2023", // Add your founding year
    email: "danmilad.code@gmail.com", // Add your contact email

    address: {
      "@type": "PostalAddress",
      addressCountry: "Australia",
      addressLocality: "Brisbane",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://solvr-landing.vercel.app",
    },
    offers: {
      "@type": "Offer",
      name: "AI Business Solutions",
      description: "Transform your business with AI expertise",
      price: "500",
      priceCurrency: "USD",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Transformation",
            description: "AI-powered business transformation solutions",
            provider: {
              "@type": "Organization",
              name: "SOLVR",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Expertise",
            description: "Expert AI consulting and implementation",
            provider: {
              "@type": "Organization",
              name: "SOLVR",
            },
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/in/daniel-milad-7467731a4/?originalSubdomain=au",
      "https://twitter.com/rahmsc_",
      // Add other social media URLs
    ],
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}
