"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const stats = [
    {
      label: "Projects & Technical Experience",
      value: "8+ Projects",
      accent: "var(--pink-dark)",
    },
    {
      label: "Collaborations & Contributions",
      value: "Team of 4-5",
      accent: "var(--blue)",
    },
    {
      label: "Educational Background",
      value: "Diploma In Software Engineering",
      school: "-Aptech Computer Education",
      note: "In Progress",
      accent: "var(--green)",
    },
  ];

  return (
    <section
      className="w-full relative py-12 bg-[url('/exp_bg.jpeg')] bg-cover bg-center"
      id="experience"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <h2 className="text-4xl font-bold mb-2 bg-white bg-clip-text text-transparent lg:pt-2 relative mx-auto mb-8 md:mb-6 flex items-center justify-center drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
        Projects & Experience
      </h2>

      <div className="relative max-w-5xl mx-auto lg:px-2 px-6 grid grid-cols-1 sm:grid-cols-3 lg:gap-20 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
      
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.2 }} // more forgiving trigger
            className="rounded-2xl shadow-lg p-8 border border-slate-200 bg-black/30"
          >
            <h3
              className="text-2xl font-extrabold mb-2"
              style={{ color: stat.accent }}
            >
              {stat.label}
            </h3>
            <p className="text-sm font-medium text-white">{stat.value}</p>
            {stat.school && (
              <p className="text-sm text-gray-400 italic mt-2">{stat.school}</p>
            )}
            {stat.note && (
              <p className="text-sm text-gray-400 italic">{stat.note}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
