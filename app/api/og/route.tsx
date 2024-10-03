import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) return new Response("No title Found!", { status: 500 });

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white rounded">
          <p tw="ml-2 font-bold text-2xl">Minhaj&#39;s Post</p>

          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              BLOG POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">https://minhajul.com</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">https://github.com/minhajul-im</div>
            </div>
          </div>
        </div>
      ),
      {
        height: 600,
        width: 1200,
      }
    );
  } catch (error) {
    return new Response("OG images failed!", { status: 500 });
  }
};
