"use client";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "JavaJolt - Java Quiz Application",
      frontImage: "/javajolt.png",
      backImage: "/javajolt2.png",
      title: "JavaJolt",
      description:
        "I built a quiz app that helps learners & professionals practice Java concepts interactively. The hardest part was designing a question engine that could randomize & validate answers reliably. Working in & leading a group of four, I focused on backend logic & UI design, which strengthened my Spring Boot fundamentals & taught me how to collaborate effectively.",
      demoLink: "https://javajolt.onrender.com/",
      githubLink: "https://github.com/daniella-alagwu/JavaJolt",
    },
    {
      title: "Bidspeed",
      frontImage: "/bidspeed2.png",
      backImage: "/bidspeed.png",
      title: "BidSpeed",
      description:
        "I created an auction platform where collectors can bid on rare items in real time. Implementing live bidding logic and ensuring fairness was challenging. I learned how to handle concurrent user actions and integrate secure payment flows.",
      demoLink: "https://bidspeed-auctions.vercel.app/",
      githubLink: "https://github.com/daniella-alagwu/BidSpeed",
    },
    {
      title: "WeVote - Online Voting System",
      frontImage: "/wevote.png",
      backImage: "/wevote2.png",
      title: "WeVote",
      description:
        "I developed an online voting system to promote transparent elections. The toughest part was ensuring vote integrity and preventing duplicate submissions. In a team of five, I handled the UI and voting process, gaining experience with authentication, database security, and building systems that mirror real-world governance.",
      demoLink: "https://wevote-xceg.onrender.com/",
      githubLink: "https://github.com/daniella-alagwu/voting-system",
    },
    {
      title: "HomFlow",
      frontImage: "/homflow.png",
      backImage: "/homflow2.png",
      title: "HomFlow",
      description:
        "I built a smart home automation app that lets users control devices remotely. The challenge was integrating multiple device APIs and keeping the interface intuitive. I learned about IoT communication protocols, ",
      demoLink: "https://homflow.onrender.com/",
      githubLink: "https://github.com/daniella-alagwu/HomFlow",
    },
    {
      title: "Portfolio",
      frontImage: "/portfolio.png",
      backImage: "/portfolio2.png",
      title: "My Portfolio",
      description:
        "I created my personal portfolio to showcase projects and skills. The hardest part was balancing design aesthetics with performance. I learned how to optimize Next.js for fast loading and how to present technical work in a way that appeals to recruiters.",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 bg-white" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              {/* Flip Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg border border-gray-200 cursor-pointer">
                <img
                  src={project.frontImage}
                  alt={`${project.title} front`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:rotate-y-180 group-hover:scale-95 backface-hidden"
                />
                <img
                  src={project.backImage}
                  alt={`${project.title} back`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] rotate-y-180 group-hover:rotate-y-0 group-hover:scale-95 backface-hidden"
                />
              </div>

              {/* Title */}
              <p className="text-black font-bold text-xl md:text-2xl text-center mt-4">
                {project.title}
              </p>
              <p className="text-gray-500 text-sm text-center mt-2">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--blue)] hover:text-[var(--green)] underline underline-offset-4 transition-colors duration-300"
                >
                  View Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-[var(--pink-dark)] underline underline-offset-4 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
