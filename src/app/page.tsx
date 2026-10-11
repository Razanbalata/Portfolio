import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import ContactLinks from "../components/sections/ContactLinks";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import MarqueeText from "../components/sections/MarqueeText";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import ScrollProgressBar from "../components/ui/ScrollProgressBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
     <ScrollProgressBar />
      <Navbar />
      <main className="">
        <Hero />
        <MarqueeText/>
        <Services />
        <About/>
        <Skills/>
        <Experience/>
        <Projects />
        <Education/>
        <ContactLinks/>
        <Contact/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
