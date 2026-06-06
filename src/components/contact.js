"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { RotatingLines } from "react-loader-spinner";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          setStatus("Failed to send message. Please try again.");
          console.error(error);
          setLoading(false);
        },
      );
  };

  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-black">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-black ">
            Reach out to work with me, collaborations, <br/> questions, or just to say hi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="mb-8 text-black ">
              I'm always open to new opportunities, collaborations, or a quick
              chat.
            </p>
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[var(--pink-light)] text-black">
                  <FaLocationPin />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-black">Location</h3>
                  <p className="text-black ">Lagos, Nigeria</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[var(--pink-light)] text-black">
                  <FaPhone />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-black">Phone</h3>
                  <a href="tel:+2349030827482" className="text-black hover:text-[var(--blue)] underline underline-offset-4 transition-colors ">+234 903 082 7482</a>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[var(--pink-light)] text-black">
                  <FaEnvelope />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-black">Email</h3>
                  <a href="mailto:mmesomaalagwu@gmail.com?subject=Portfolio%20Inquiry" className="text-black hover:text-[var(--blue)] underline underline-offset-4 transition-colors ">mmesomaalagwu@gmail.com</a>
                </div>
              </li>
              <li>
                <h3 className="text-lg font-medium text-black mb-2">Socials</h3>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/mimi-daniella"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-[var(--blue)] underline underline-offset-4 transition-colors"
                  >
                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 1.7 2.9 1.2.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                    </svg>
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/daniella-alagwu-1765a73a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-[var(--blue)] underline underline-offset-4 transition-colors"
                  >
                    {/* LinkedIn SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.9c0-1.9-.1-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href="https://x.com/Mimi__Daniella"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-[var(--blue)] underline underline-offset-4 transition-colors"
                  >
                    {/* Twitter SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.1 9.1 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.12 1A12.8 12.8 0 0 1 3 1.1a4.5 4.5 0 0 0-.6 2.3c0 1.6.8 3 2 3.9a4.5 4.5 0 0 1-2-.6v.06c0 2.2 1.6 4 3.7 4.4a4.6 4.6 0 0 1-2 .08c.6 1.9 2.3 3.3 4.4 3.3A9.1 9.1 0 0 1 0 19.5a12.8 12.8 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6A9.2 9.2 0 0 0 23 3z" />
                    </svg>
                    X
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 shadow-lg rounded-xl p-8 border border-[var(--blue)]/30"
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--blue)] dark:text-white">
              Send me a mail !
            </h3>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[var(--blue)] focus:ring-[var(--blue)] dark:bg-slate-800 dark:text-gray-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[var(--blue)] focus:ring-[var(--blue)] dark:bg-slate-800 dark:text-gray-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[var(--blue)] focus:ring-[var(--blue)] dark:bg-slate-800 dark:text-gray-300"
              ></textarea>
            </div>
 
            <button
              type="submit"
              className="w-full bg-[var(--green)] cursor-pointer text-black px-6 py-3 rounded-md font-semibold hover:bg-[var(--green)] transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <RotatingLines
                  strokeColor="#000000"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="20"
                  height="20"
                  className="mx-auto"
                  visible={true}
                />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
