import type { Metadata } from "next";

import "./globals.css";

import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rahms",
  description: "Web Dev || Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} antialiased`}>{children}</body>
    </html>
  );
}
