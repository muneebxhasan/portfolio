import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
