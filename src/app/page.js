"use client";

import Header from "../components/header";
import TypingLoop from "../components/typingLoop";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const icons = useMemo(
    () => [
      {
        src: "/x.png",
        alt: "twitter",
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
    ],
    [],
  );

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:px-[100px] px-[30px] mb-[100px]">
          {/* LEFT CONTENT */}
          <div className="md:w-[50%] flex flex-col items-center ">
            <h1 className="md:text-[70px] text-[45px] leading-6.5 font-bold glowing-text md:leading-10 text-[#ffffffa2]">
              Fullstack <br />{" "}
              <span className="text-white ml-5">Developer</span>
            </h1>

            <TypingLoop
              words={[
                "Frontend Developer",
                "Backend Developer",
                "React Developer",
                "Node.js Developer",
                "Next.js Developer",
              ]}
              typingSpeed={100}
              eraseSpeed={50}
              delayBetween={1200}
              className="text-xl glowing-text mt-[20px] text-blue-200"
            />

            <p className=" md:text-[18px] text-[15px] text-center font-normal text-[rgba(255,255,255,0.51)]">
              Hi i'm <span className="text-white">David</span>, Bringing your
              digital ideas to life with innovative design and seamless
              development. I specialize in creating responsive, user-friendly
              websites that not only look great but perform flawlessly. Explore
              my portfolio to see how I can help transform your vision into a
              captivating online experience.
            </p>

            {/* ICONS */}
            <div className="flex mt-[20px] justify-center md:justify-start md:w-[200px]">
              {icons.map((icon) => (
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.alt}
                  href={icon.link}
                  whileHover={!prefersReducedMotion ? { scale: 1.25 } : {}}
                  transition={{ duration: 0.25 }}
                  className="mx-[20px] md:mx-0 md:mr-[20px]"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[35px] max-h-[35px] w-[35px]"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
