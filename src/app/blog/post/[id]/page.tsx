import { getPostById } from "@/hook/getPostById";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Tag } from "@/utils/Interface";
interface PostPageProps {
  params: {
    id: string; // Changed from _id to id to match the folder structure
  };
}

export default async function PostPage({ params }: PostPageProps) {
  if (!params.id) {
    notFound();
  }

  try {
    const post = await getPostById(params.id);

    if (!post) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]">
        <main className="max-w-3xl mx-auto px-4 py-8 bg-white dark:bg-gray-900">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {post.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag: Tag) => (
                    <span
                      key={tag.slug.current}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <time className="text-gray-500 dark:text-gray-400">
                  {formatDate(post.publishedAt.toString())}
                </time>
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="relative w-full h-[400px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose dark:prose-invert max-w-none">
              <PortableText value={post.body as unknown as PortableTextBlock} />
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    notFound();
  }
}
