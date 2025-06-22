export default function Home() {
  return (
    <div id="home" className="box-border w-full p-4 relative">
      <div className="intro box-border absolute bottom-25">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black w-full">
          
          SOFTWARE <br />
          DEVELOPER
        </h1>
        <h2 className=" md:max-w-6/10 lg:max-w-3/8 relative text-white/65">
          Digital solutions to real-world problems with React, TypeScript, and
          TailwindCSS.
        </h2>
      </div>

      <div
        id="prototype-container"
        className="box-border text-right p-4 text-xs absolute bottom-0 right-0"
      >
        <p className="font-bold">
          PROTOTYPE{" "}
          <span className="bg-white/25 px-0.5">
            &#x2771;&#x2771;&#x2771;&#x2771;
          </span>
        </p>
        <p className="font-thin">VERSION: 1.0.0</p>
      </div>
    </div>
  );
}
