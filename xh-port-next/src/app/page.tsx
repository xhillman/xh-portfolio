import Image from "next/image";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div id="home-container" className="flex flex-col w-full h-full p-2 md:p-4 box-border relative overflow-auto">
      <Header />
      <div id="home-content" className="flex flex-col justify-between w-full h-full p-2 md:p-4 box-border relative overflow-hidden">
        <div className="hero mt-[11.089rem] sm:mt-[15rem] relative">
          <h1 className="text-4xl md:text-8xl font-black">FULLSTACK <br />DEVELOPER</h1>
          <h2 className="max-w-[256px] md:max-w-6/10 lg:max-w-3/8">
            From React frontends to Golang APIs &mdash; I build digital solutions to real-world problems.
          </h2>
          <p className="text-[200px] md:text-[400px] font-black absolute -top-40 md:-top-70 right-0 lg:right-10 xl:left-90 z-[-99] text-blue-900/50">01</p>
        </div>

        <div id="prototype-container" className="box-border text-right p-2 md:p-4 text-xs">
          <p className="font-bold">PROTOTYPE ///</p>
          <p className="font-thin">VERSION: 1.0</p>
        </div>
      </div>

    </div>
  );
}
