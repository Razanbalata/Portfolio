import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="">
        <Hero />
        <About/>
        <Skills/>
        <Projects />
        <Services />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
