import "./blog.css";
import type { Metadata } from "next";
import { robotoMono } from "../product/fonts/fonts";
export const metadata: Metadata = {
  title: "Retro Terminal Blog",
  description: "An old-school computer text-based blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body
        className={`bg-black text-green-400 ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
