/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="text-3xl font-bold mb-6 mt-8 text-gray-900 dark:text-white">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>
    ),
  },
};

interface PortableTextProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  value: any[]; // You can create a more specific type for your Sanity content
}

export function PortableTextComponent({ value }: PortableTextProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
