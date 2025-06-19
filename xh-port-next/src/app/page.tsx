import Image from "next/image";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div id="home-container">
      <Header />
      <h1>FULLSTACK DEVELOPER</h1>
      <h2 className="subheading">
        From React frontends to Golang APIs &mdash; I build digital solutions to real-world problems.
      </h2>
      <p>01</p>
      <div id="prototype-container">
        <p>PROTOTYPE ///</p>
        <p>VERSION: 1.0</p>
      </div>
    </div>
  );
}
