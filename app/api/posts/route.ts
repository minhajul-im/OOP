import { islamic, programming } from "#site/content";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const category = url.searchParams.get("type");
  let filterPosts = [...programming, ...islamic];

  if (category === "islamic") {
    filterPosts = islamic;
  } else if (category === "programming") {
    filterPosts = programming;
  }

  return new Response(JSON.stringify(filterPosts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
