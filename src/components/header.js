"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full md:px-[70px] md:py-[30px] p-[20px] flex justify-between items-center z-50"
    >
      {/*<img
        src="/log.png"
        alt="David Adams Logo"
        loading="eager"
        decoding="async"
        className="md:h-[70px] h-[40px] z-50"
      />*/}
      <h1 className="text-white text-[25px] font-bold"> holy.dev </h1>

      <Link
        href="/contactPage"
        className="flex glow z-30 justify-center items-center md:text-[20px] text-[15px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[3px] md:px-[20px] md:py-[7.5px] px-[15px] py-[5px] border-2 border-blue-500 rounded-full"
      >
        Contact Me
      </Link>
    </motion.header>
  );
}
