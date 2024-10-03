import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="container flex justify-between py-2">
        <div className="flex gap-8 items-center">
          <Link className="text-xl font-semibold" href={"/"}>
            Blog Magazine
          </Link>
          <Link href={"/posts"}>posts</Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
