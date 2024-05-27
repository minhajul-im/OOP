import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-cyan-900">
      <div className="text-center">
        <h1 className="text-4xl font-mono font-bold text-white">
          COMING SOON...
        </h1>
        <Link
          className="text-sm font-semibold underline text-blue-400"
          href={"/signin"}>
          signin
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
