import "./blog.css";
import { Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/blog-components/theme-provider";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "700"],
  variable: "--font-source-code-pro",
  fallback: ["monospace"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata = {
  title: "Rahms' Blog",
  description: "A blog from a web dev intern building out the new future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceCodePro.className} ${sourceCodePro.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
