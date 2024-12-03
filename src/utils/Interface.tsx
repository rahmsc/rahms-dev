export interface Post {
    image: any;
    _id: string;
    title: string;
    excerpt: string;
    publishedAt: string | Date;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    body: any[]; // You might want to type this more specifically based on your schema
    tags: Array<string | { name: string; slug: string | { current: string } }>;
    imageUrl?: {
      asset?: {
        _ref?: string;
        _type?: string;
        url?: string;
      };
      alt?: string;
    } | string; // In case the image is stored as a direct URL
  }
export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
}