"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const stats = [
    {
      label: "Professional Experience",
      value: "Junior Developer",
      accent: "var(--pink-dark)",
    },
    {
      label: "Projects Done & Contributed",
      value: "8+",
      accent: "var(--blue)",
    },
    { label: "Positive Feedbacks", value: "20+", accent: "var(--green)" },
  ];

  return (
    <section
      className="w-full relative py-12 bg-[url('/exp_bg.jpeg')] bg-cover bg-center"
      id="experience"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <h2 className="text-4xl font-bold mb-2 bg-white bg-clip-text text-transparent lg:pt-2 relative mx-auto mb-8 md:mb-6 flex items-center justify-center drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto lg:px-2 px-6  grid grid-cols-1 sm:grid-cols-3 lg:gap-20 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className=" rounded-2xl shadow-lg p-8 border border-slate-200"
          >
            <h3
              className="text-2xl lg:text-3xl font-extrabold mb-2"
              style={{ color: stat.accent }}
            >
              {stat.value}
            </h3>
            <p className="text-sm font-medium text-white">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
