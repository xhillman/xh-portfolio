import Link from "next/link";
// import Glyphs from "./Glyphs";

export default function Header() {
  return (
    <header className="box-border flex justify-between p-4 bg-[#151515] sticky top-0 z-1">
      <h2 className="relative text-2xl md:text-3xl font-bold max-w-1/2">Xavier Hillman</h2>
      {/* <Glyphs /> */}
      <nav className="">
        <ul className="flex flex-col h-full lg:flex-row justify-around lg:items-center">
          <li className="mb-4 lg:mb-0 lg:mr-4">
            <Link href="/" className="flex hover:text-rose-500 hover:scale-105 hover:decoration-rose-500 hover:translate-x-1 hover:-translate-y-1">
              
                Home<svg
                className="feather feather-arrow-up-right"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:mr-4">
            <Link
              href="/projects"
              className="flex hover:text-rose-500 hover:scale-105 hover:decoration-rose-500 hover:translate-x-1 hover:-translate-y-1"
            >
              Projects <span><svg
                className="feather feather-arrow-up-right"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" /></svg></span>
            </Link>
          </li>
          <li className="flex hover:text-rose-500 hover:translate-x-1 hover:-translate-y-1">About&nbsp;<svg
                className="feather feather-arrow-up-right"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" /></svg></li>
        </ul>
      </nav>
    </header>
  );
}
