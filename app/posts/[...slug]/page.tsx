import "@/styles/mdx.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Programming as Post } from "#site/content";
import { fetchPosts } from "@/services/fetch-post-data";
import { MdxComponent } from "@/components/post/mdx-component";

type ParamsType = {
  params: {
    slug: string[];
  };
};

const getPostFromParams = async (params: ParamsType["params"]) => {
  const slug = params?.slug?.join("?");
  const posts = await fetchPosts(null);

  const post = posts.find((post: Post) => post.slugAsParams === slug);
  return post;
};

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const post = await getPostFromParams(params);

  if (!post) return {};

  const ogUrlSearchParams = new URLSearchParams();
  ogUrlSearchParams.set("title", post?.title);

  return {
    title: post?.title,
    description: post?.description,
    authors: { name: "Minhajul Islam" },
    openGraph: {
      title: post?.title,
      description: post?.description,
      type: "article",
      url: post?.slug,
      images: [
        {
          url: `og?${post?.slugAsParams.toString()}`,
          width: 1200,
          height: 600,
          alt: post?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.description,
      images: [`og?${post?.slugAsParams.toString()}`],
    },
  };
};

export const generateStaticParams = async (): Promise<
  ParamsType["params"][]
> => {
  const posts = await fetchPosts(null);
  return posts.map((post: Post) => ({
    slug: post?.slugAsParams.split("/"),
  }));
};

const PostPage = async ({ params }: ParamsType) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) return notFound();

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>

      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />

      <MdxComponent code={post.body} />
    </article>
  );
};

export default PostPage;
