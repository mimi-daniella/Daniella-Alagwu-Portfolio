"use client";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTopButton from "@/components/BackToTop";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="scroll-smooth w-full bg-white min-h-screen">
      <Navbar />
      <BackToTopButton />

      {/* Hero section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/desk_board.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            I'm Daniella
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            ...and I'm &nbsp;
            <span className="text-[var(--green)] inline-block">
              {mounted ? (
                <Typewriter
                  words={[
                    "a Software Engineer",
                    "a Full Stack Developer",
                    "an AI/Machine Learning Engineer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              ) : (
                "a Software Engineer"
              )}
            </span>
          </p>
          {/* <p className="mt-8 text-sm font-light text-gray-500 italic">
            “Engineering clarity from complexity <br /> — that's my craft.”
          </p> */}
          <a
            href="/Daniella_Alagwu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 lg:mt-10 px-6 py-3 rounded-sm shadow-lg bg-[var(--pink-dark)] text-black font-semibold transition-colors duration-200 animate-pulse hover:scale-105"
          >
            CHECK OUT MY RESUME
          </a>
        </div>
      </section>

      <AboutSection />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
