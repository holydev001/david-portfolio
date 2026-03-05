"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const icons = [
    {
      src: "/x.png",
      alt: "Twitter",
      link: "https://x.com/holydev0001",
    },
    {
      src: "/github.png",
      alt: "github",
      link: "https://github.com/holydev001",
    },
    {
      src: "/linked-in.png",
      alt: "linkedin",
      link: "https://www.linkedin.com/in/david-adams-b0228835b/",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(null);
    setError(null);

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      setError("Don't leave me hanging!~Every input is a needed.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setSuccess("Thank you! I'll get back to you soon!");
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Connection glitch😵‍💫. Give it another shot?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-[900px] md:pt-[70px] pb-36 pt-[20px] px-7">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between"
      >
        {/* LEFT COPY */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:w-[40%]">
          <p className="text-[18px] text-white ">Get in touch</p>

          <h1 className="mt-1 text-[28px] leading-tight md:text-[42px]">
            Let’s work together
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Have a project in mind or just want to say hello? <br />
            I’m always open to discussing new opportunities, collaborations, or
            simply sharing ideas.
          </p>
        </div>

        {/* FORM */}
        <form
          className="contact-glow flex w-full flex-col gap-4 rounded-2xl pb-6 md:w-[55%]"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="contact-input"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="contact-input"
          />

          <textarea
            name="message"
            placeholder="Your message"
            className="contact-input min-h-[120px] resize-none"
          />

          {/* FEEDBACK */}
          {success && <p className="text-green-400 text-[16px] font-semibold">{success}</p>}
          {error && <p className="text-red-400 text-[16px] font-semibold">{error}</p>}

          {/* ACTIONS */}
          <div className="mt-4 flex flex-col items-center gap-5">
            <button
              type="submit"
              disabled={loading}
              className=" flex w-[200px] items-center justify-center rounded-full border-2 border-blue-500 bg-[rgba(255,255,255,0.1)] px-5 py-2 text-[15px] backdrop-blur-[3px] transition hover:bg-[rgba(255,255,255,0.15)] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {icons.map((icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.2 }}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="h-[32px] w-[32px]"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
