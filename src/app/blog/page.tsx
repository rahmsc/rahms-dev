import Link from "next/link";
import BlogPost from "../../components/blog-components/blog-post";
import { getPosts } from "./posts";

export default function BlogPage() {
  const blogPosts = getPosts();

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <pre className="text-center mb-4">
            {`
 ____  _             
|  _ \\| | ___   __ _ 
| |_) | |/ _ \\ / _\` |
|  _ <| | (_) | (_| |
|_| \\_\\_|\\___/ \\__, |
               |___/ 
`}
          </pre>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-green-400 hover:text-green-600 transition-colors"
            >
              &lt; Back_to_Home
            </Link>
            <Link
              href="/blog/login"
              className="text-green-400 hover:text-green-600 transition-colors"
            >
              Admin_Login &gt;
            </Link>
          </div>
        </header>
        <div>
          {blogPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
