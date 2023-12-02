//
import Navbar from "./components/Navbar";
import "./app.scss";
import HeroPage from "./components/hero/HeroPages";
import AboutPage from "./components/about/AboutPage";
import Tokenomics from "./components/tokenomics/Tokenomics";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0d1335]">

      <div className="z-10">
      
        <section id="Homepage">
          <Navbar />
          <HeroPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="tokenomics">
          <Tokenomics />
        </section>
     
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
      </div>
      
      {/* <Footer /> */}
    </main>
  );
}