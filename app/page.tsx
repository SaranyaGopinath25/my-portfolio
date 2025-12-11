"use client";

import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Activities from "@/components/sections/Activities";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
