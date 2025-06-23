import Link from "next/link";
// import Glyphs from "./Glyphs";

export default function Header() {
  return (
    <header className="box-border flex justify-between p-4 bg-[#151515] sticky top-0 z-1">
      <h2 className="relative md:text-3xl font-bold max-w-1/2">Xavier Hillman</h2>
      {/* <Glyphs /> */}
      <nav className="">
        <ul className="flex flex-col h-full lg:flex-row justify-around lg:items-center">
          <li className="mb-4 lg:mb-0 lg:mr-4">
            <Link href="/" className="flex hover:text-rose-500 ease-in-out duration-200 hover:translate-x-1">
              
                Home &#x1f86a;
            </Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:mr-4">
            <Link
              href="/projects"
              className="flex hover:text-rose-500 ease-in-out duration-200 hover:translate-x-1"
            >
              Projects &#x1f86a;
            </Link>
          </li>
          <li className="">
          <Link
              href="/about"
              className="flex hover:text-rose-500 ease-in-out duration-200 hover:translate-x-1"
            >About &#x1f86a;
            </Link></li>
        </ul>
      </nav>
    </header>
  );
}
