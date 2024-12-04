import { BlogList } from "@/components/blog-components/blog-list";
import { Header } from "@/components/blog-components/header";
import { ThemeToggle } from "@/components/blog-components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper dark:bg-dark-paper transition-colors duration-300 ease-in-out font-sourceCodePro">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex justify-end mb-4 sm:mb-6">
          <ThemeToggle />
        </div>
        <BlogList />
      </main>
    </div>
  );
}
