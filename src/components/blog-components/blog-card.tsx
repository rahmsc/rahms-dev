"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import type { Post } from "@/utils/Interface";

// export interface Post {
//   id: number;
//   title: string;
//   excerpt: string;
//   publishedAt: Date;
//   body: string;
//   tags: string[];
//   image: string;
// }

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  console.log("Post in BlogCard:", post);
  return (
    <Link href={`blog/post/${post._id}`} className="block group">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100 dark:border-gray-700 group-hover:border-gray-200 dark:group-hover:border-gray-600">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                priority
                className="rounded-lg object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-source-code-pro line-clamp-2 preserve-whitespace">
                {post.excerpt}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag, index) => {
                  const tagName =
                    typeof tag === "string"
                      ? tag
                      : tag.name ||
                        (typeof tag.slug === "string"
                          ? tag.slug
                          : tag.slug?.current) ||
                        "Unknown Tag";

                  return (
                    <span
                      key={`${post._id}-tag-${index}-${tagName}`}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tagName}
                    </span>
                  );
                })}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {formatDate(post.publishedAt?.toString() || "")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
