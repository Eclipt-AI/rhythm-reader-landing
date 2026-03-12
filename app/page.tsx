import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import About from "./components/About";
import Community from "./components/Community";
import Join from "./components/Join";
import Representation from "./components/Representation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <HowToUse />
        <About />
        <Community />
        <Join />
        <Representation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
