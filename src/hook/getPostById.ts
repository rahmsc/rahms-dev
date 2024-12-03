import type { Post } from "@/utils/Interface";
import { client } from "@/sanity/lib/client";

export async function getPostById(id: string) {
  if (!id) {
    throw new Error('Post ID is required');
  }

  const query = `*[_type == "post" && _id == $id][0]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "tags": tags[]-> {
      name,
      "slug": slug.current
    },
    "image": mainImage.asset->url
  }`;

  try {
    const post = await client.fetch(query, { id });
    
    if (!post) {
      throw new Error(`Post with ID ${id} not found`);
    }

    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

