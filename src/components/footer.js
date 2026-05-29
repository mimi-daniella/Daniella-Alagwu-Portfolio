"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-bold mb-3">Daniella Alagwu</h3>
          <p className="text-sm text-white/80">
            Building modern web experiences with Next.js, TailwindCSS, and a
            passion for clean design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:underline underline-offset-4">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline underline-offset-4">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline underline-offset-4"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline underline-offset-4">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-bold mb-3">Connect</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/mimi-daniella"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--green)] transition-colors"
            >
              {/* GitHub SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 1.7 2.9 1.2.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/daniella-alagwu-1765a73a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--green)] transition-colors"
            >
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.9c0-1.9-.1-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
              </svg>
            </a>
            <a
              href="https://x.com/Mimi__Daniella"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--green)] transition-colors"
            >
              {/* Twitter SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.1 9.1 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.12 1A12.8 12.8 0 0 1 3 1.1a4.5 4.5 0 0 0-.6 2.3c0 1.6.8 3 2 3.9a4.5 4.5 0 0 1-2-.6v.06c0 2.2 1.6 4 3.7 4.4a4.6 4.6 0 0 1-2 .08c.6 1.9 2.3 3.3 4.4 3.3A9.1 9.1 0 0 1 0 19.5a12.8 12.8 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6A9.2 9.2 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Daniella. All rights reserved.
      </div>
    </footer>
  );
}
