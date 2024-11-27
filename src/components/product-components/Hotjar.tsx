"use client";
import Script from "next/script";

export const HotJar = () => {
  const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

  console.log("Hotjar ID:", HOTJAR_ID);
  console.log("Environment:", process.env.NODE_ENV);

  if (!HOTJAR_ID || process.env.NODE_ENV !== "production") {
    console.log("Hotjar not loaded: Development mode or missing ID");
    return null;
  }

  return (
    <Script
      id="hotjar"
      strategy="afterInteractive"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
      }}
    />
  );
};
