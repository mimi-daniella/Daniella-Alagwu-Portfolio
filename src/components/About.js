"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-white text-black px-8 py-2 mt-10"
    >
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src="/mimi3.jpeg"
          alt="Daniella"
          width={256}
          height={256}
          className="rounded-sm object-cover border-4 md:h-96 w-96"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 bg-black bg-clip-text text-transparent">
          ABOUT ME
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Hi there! I'm a developer and problem solver at heart who thrives on
          turning challenges into elegant solutions.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Beyond code, I'm passionate about learning, collaborating, leading,
          and pushing boundaries in multiple fields. My goal is to craft digital
          experiences that are not only functional but also meaningful.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Off the clock, you'd often catch me on reality TV shows, indulging in
          my love for music, or exploring the latest fashion and tech trends.
          Creativity and poise inspire me, and you'll often find those qualities
          reflected in my projects and daily life.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I'm currently focused on building backend systems and exploring AI
          integration, while continuing to grow my skills in full‑stack
          development.
        </p>
      </div>
    </section>
  );
}
