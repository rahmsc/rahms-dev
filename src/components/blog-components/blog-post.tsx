"use client";

import { useState } from "react";
import { format } from "date-fns";
import type { BlogPost as BlogPostType } from "../../app/blog/posts";

export default function BlogPost({ title, date, content }: BlogPostType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full text-left border border-green-400 p-4 hover:bg-green-400 hover:text-black transition-colors cursor-pointer"
      >
        <span className="text-xl font-bold">&gt; {title}</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 dialog-overlay">
          <div className="bg-black border-2 border-green-400 p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto dialog-content">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <time className="text-sm text-green-600 block mb-4">
              [DATE: {format(new Date(date), "yyyy-MM-dd")}]
            </time>
            <div className="prose prose-invert max-w-none mb-6">
              <p className="whitespace-pre-wrap">{content}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="border border-green-400 px-4 py-2 hover:bg-green-400 hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
