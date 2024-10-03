import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Programming as Post } from "#site/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatter(input: string) {
  const data = new Date(input);
  return data.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a: Post, b: Post) => {
    if (a.date > b.date) return -1;
    if (b.date > a.date) return 1;
    return 0;
  });
}
