import Header from "./_components/Header";

export default function Home() {
  return (
    <div id="home-container" className="flex flex-col w-full h-full p-2 md:p-4 box-border relative overflow-auto">
      <Header />
      <div id="home-content" className="flex flex-col justify-between w-full h-full p-2 md:p-4 box-border relative overflow-hidden after:w-[16px] after:h-[16px] after:bottom-0  after:right-0 after:border-b-2 after:border-r-2 after:absolute after:border-white/25 before:w-[16px] before:h-[16px] before:border-b-2 before:border-l-2 before:bottom-0 before:left-0 before:absolute before:border-white/25">
        <div className="hero mt-[11.089rem] sm:mt-[15rem] relative">
          <h1 className="text-4xl md:text-8xl font-black">SOFTWARE <br />DEVELOPER<span className="text-blue-500/50">*</span></h1>
          <h2 className="max-w-[256px] md:max-w-6/10 lg:max-w-3/8 relative text-white/65">
            Digital solutions to real-world problems with React, TypeScript, and TailwindCSS.
          </h2>
          <p className="text-[200px] md:text-[400px] font-black absolute -top-40 md:-top-70 right-0 lg:right-10 xl:left-90 z-[-99] text-white/20">01</p>
        </div>

        <div id="prototype-container" className="box-border text-right p-2 md:p-4 text-xs">
          <p className="font-bold">PROTOTYPE <span className="bg-white/25 px-0.5">&#x2771;&#x2771;&#x2771;&#x2771;</span></p>
          <p className="font-thin">VERSION: 1.0.0</p>
        </div>
      </div>

    </div>
  );
}
