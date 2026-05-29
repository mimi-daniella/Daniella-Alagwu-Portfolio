"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 mt-10">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <Image
              src="/myFullLogo.png"
              alt="Logo"
              width={150}
              height={100}
              className="cursor-pointer w-40 h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white text-lg">
            <a href="#about" className="nav-link">
              About Me
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a
              href="#contact"
              className="bg-[var(--green)] p-2 transition-colors text-black mt-[-8px] hover:bg-[var(--pink-dark)]"
            >
              Contact Me !
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {/* Hamburger icon */}
              {isOpen ? (
                <svg
                  className=""
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 -0.5 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-20 cursor-pointer"
                >
                  <path
                    d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"
                    fill="#a3f7b5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-[70vh] w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-4 text-black text-lg hover:text-blue-600"
        >
          ✕
        </button>
        <nav className="flex flex-col space-y-6 p-6">
          <a href="#about" className="nav-link text-gray-700">
            About Me
          </a>
          <a href="#skills" className="nav-link text-gray-700">
            Skills
          </a>
          <a href="#experience" className="nav-link text-gray-700">
            Experience
          </a>
          <a href="#projects" className="nav-link text-gray-700">
            Projects
          </a>
          <a
            href="#contact"
            className="bg-[var(--green)] p-2 text-black hover:bg-[var(--pink-dark)]"
          >
            Contact Me !
          </a>
        </nav>
      </div>
    </nav>
  );
}
