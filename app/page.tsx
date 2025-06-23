import Link from "next/link";
import Glyphs from "./_components/Glyphs";

export default function Home() {
  return (
    <div id="home" className="box-border flex-auto p-4 relative h-[75dvh] flex items-end">
      <div className="intro box-border w-full">
        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black mb-2">

          SOFTWARE <br />
          DEVELOPER
        </h1>
        <div className="subheading-callout relative p-2 t-corner-brackets b-corner-brackets md:p-2 md:w-full max-w-[88%] md:max-w-[75%] lg:max-w-[45%] mb-4 md:mb-4">
        <h2 className="text-neutral-400 bg-[#171717] p-1 md:p-3 ">
          Digital solutions to real-world problems with React, TypeScript, and
          TailwindCSS.
        </h2>
        </div>

        {/* <Glyphs /> */}

        <ul className="socials h-fit flex">
          <li>
            <Link href="" className="text-sm md:text-base font-bold flex mr-2 ease-in-out duration-200 hover:text-rose-500 hover:scale-105 hover:translate-x-1 hover:-translate-y-1 underline decoration-2 underline-offset-3">GitHub <svg
                className="feather feather-arrow-up-right"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg></Link>
          </li>
          <li>
            <Link href="" className="text-sm md:text-base font-bold flex mr-2 ease-in-out duration-200 hover:text-rose-500 hover:scale-105 hover:translate-x-1 hover:-translate-y-1 underline decoration-2 underline-offset-3">LinkedIn<svg
                className="feather feather-arrow-up-right"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg></Link>
          </li>
          <li>
            <Link href="" className="text-sm md:text-base font-bold flex ease-in-out duration-200 hover:text-rose-500 hover:scale-105 hover:translate-x-1 hover:-translate-y-1 underline decoration-2 underline-offset-3">Email<svg
                className="feather feather-arrow-up-right"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg></Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
