import { Programming as Post } from "#site/content";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchPosts = async (type: string | null): Promise<Post[]> => {
  try {
    const query = type ? `?type=${type}` : "";
    const res = await fetch(`${baseUrl}posts${query}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
