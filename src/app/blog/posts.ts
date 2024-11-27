import { v4 as uuidv4 } from "uuid";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

let blogPosts: BlogPost[] = [
  {
    id: uuidv4(),
    title: "The Beginning of a Journey",
    date: "2024-01-15",
    content:
      "Today marks the beginning of a new chapter. As I put pen to paper, I'm reminded of the power of written words and the stories they tell...",
  },
  {
    id: uuidv4(),
    title: "Reflections on Spring",
    date: "2024-02-01",
    content:
      "The morning dew glistens on fresh leaves, nature's own way of marking time. In these quiet moments, I find myself contemplating the cycles of life...",
  },
  {
    id: uuidv4(),
    title: "Thoughts on Literature",
    date: "2024-02-15",
    content:
      "Books have always been my closest companions. Each page turned is a new adventure, a new perspective, a new world to explore...",
  },
];

export function getPosts() {
  return blogPosts;
}

export function addPost(title: string, content: string) {
  const newPost: BlogPost = {
    id: uuidv4(),
    title,
    date: new Date().toISOString().split("T")[0],
    content,
  };
  blogPosts = [newPost, ...blogPosts];
  return newPost;
}
