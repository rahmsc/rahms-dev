/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function urlFor(source: any) {
  if (!source) {
    console.error("Invalid image source:", source);
    return null;
  }

  // If the source is already a string URL, return it directly
  if (typeof source === "string") {
    return source;
  }

  // If it's a reference, use the _ref property
  if (source._ref) {
    return builder.image(source._ref).url();
  }

  // Otherwise, use the entire source object
  return builder.image(source).url();
}
