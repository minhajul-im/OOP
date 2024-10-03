import ShowPost from "@/components/post/show-post";
import { Programming as Post } from "#site/content";
import Categories from "@/components/common/categories";
import { fetchPosts } from "@/services/fetch-post-data";

type Params = {
  searchParams: {
    type: string | null;
  };
};

const PostsPage = async ({ searchParams }: Params) => {
  const { type } = searchParams;

  const showPosts = await fetchPosts(type);

  return (
    <main className="container p-4">
      <Categories />

      <h1 className="text-4xl py-5 font-bold"> Posts page</h1>
      <p className="my-2 text-muted-foreground">
        Lorem ipsum dolor sit amet elit. Maiores consectetur harum mollitia sint
        dolore sunt.
      </p>
      <hr className="mt-6 border-b" />
      <div>
        {showPosts?.length > 0 ? (
          <section className="flex flex-col gap-6">
            {showPosts?.map((post: Post, idx: number) => (
              <ShowPost
                key={idx}
                slug={post?.slug}
                body={post?.body}
                date={post?.date}
                title={post?.title}
                published={post.published}
                description={post?.description}
              />
            ))}
          </section>
        ) : (
          <p className="text-foreground m-8 text-xl">No Posts Found!</p>
        )}
      </div>
    </main>
  );
};

export default PostsPage;
