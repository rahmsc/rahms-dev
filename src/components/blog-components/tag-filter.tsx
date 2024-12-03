"use client";

interface TagFilterProps {
  onSelectTag: (tag: string | null) => void;
  selectedTag: string | null;
}

const tags = ["tech", "web", "design", "ux", "ai"];

export function TagFilter({ onSelectTag, selectedTag }: TagFilterProps) {
  return (
    <div className="flex space-x-2">
      <button
        type="button"
        onClick={() => onSelectTag(null)}
        className={`px-3 py-1 rounded-full text-sm ${
          selectedTag === null
            ? "bg-primary text-primary-foreground"
            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelectTag(tag)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTag === tag
              ? "bg-primary text-primary-foreground"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
