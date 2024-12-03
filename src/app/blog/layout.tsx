import "./blog.css";
import { Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/blog-components/theme-provider";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata = {
  title: "My Blog",
  description: "A blog frontend for my CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${sourceCodePro.variable} font-sourceCodePro`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
