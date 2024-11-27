"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { addPost } from "../posts";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(title, content);
    router.push("/blog");
    router.refresh();
  };

  const handleLogout = () => {
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/blog");
  };

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <pre className="text-center mb-4">
            {`
 _   _                 ____           _   
| \\ | | _____      __ |  _ \\ ___  ___| |_ 
|  \\| |/ _ \\ \\ /\\ / / | |_) / _ \\/ __| __|
| |\\  |  __/\\ V  V /  |  __/ (_) \\__ \\ |_ 
|_| \\_|\\___| \\_/\\_/   |_|   \\___/|___/\\__|
`}
          </pre>
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-green-400 hover:text-green-600 transition-colors"
            >
              &lt; Back_to_Blog
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-green-400 hover:text-green-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </header>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-green-400 mb-2">
              &gt; Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black border border-green-400 p-2 text-green-400 focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-green-400 mb-2">
              &gt; Content:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-black border border-green-400 p-2 text-green-400 focus:outline-none focus:border-green-600 h-40"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full border border-green-400 p-2 text-green-400 hover:bg-green-400 hover:text-black transition-colors"
          >
            Submit_Post
          </button>
        </form>
      </div>
    </main>
  );
}
