import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const router = useRouteError();

  return (
    <section className=".screen flex flex-col items-center justify-center text-white h-screen">
      <h1 className="text-amber-800 text-8xl font-bold font-mono pb-10">
        Oopss🙊🙊
      </h1>
      <h4 className="text-2xl font-semibold text-gray-800 pb-8">
        Something is wrong!😅😅😅
      </h4>
      <h3 className="text-red-600 text-3xl py-6">
        {router?.status} !!!!! {router.statusText}
      </h3>
      <Link href="/" className="text-purple-600 underline cursor-pointer my-2">
        go to home
      </Link>
    </section>
  );
}
