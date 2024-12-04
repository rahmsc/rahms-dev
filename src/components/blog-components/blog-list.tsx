"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "@/components/blog-components/blog-card";
import { TagFilter } from "@/components/blog-components/tag-filter";
import { getPosts } from "@/hook/getPosts";
import type { Post } from "@/utils/Interface";

export function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortByLatest, setSortByLatest] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts...");
        const posts = await getPosts();
        console.log(posts);
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    console.log("useEffect running");
    fetchPosts();
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  const sortedPosts = sortByLatest
    ? [...filteredPosts].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    : [...filteredPosts].sort(
        (a, b) =>
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <TagFilter onSelectTag={setSelectedTag} selectedTag={selectedTag} />
        <button
          type="button"
          onClick={() => setSortByLatest(!sortByLatest)}
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Sort by: {sortByLatest ? "Latest" : "Oldest"}
        </button>
      </div>
      <div className="space-y-6">
        {sortedPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
