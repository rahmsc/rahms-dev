/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText as BasePortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const components = {
  types: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)?.toString() || ""}
        />
      );
    },
  },
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function PortableText({ value }: { value: any }) {
  return <BasePortableText value={value} components={components} />;
}
