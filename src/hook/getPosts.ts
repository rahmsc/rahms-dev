import { client } from "@/sanity/lib/client";

export async function getPosts() {
  return await client.fetch(`*[_type == "post"] {
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
  }`);
}
