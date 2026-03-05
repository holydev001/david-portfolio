"use client";

import UpperSec from "./upperSec";

import LowerSec from "./lowerSec";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen pt-[30px] flex items-center justify-center   "
    >
      <div className="relative w-full max-w-[1300px] md:p-[50px] p-[20px] flex flex-col gap-3">
        <UpperSec />
        <LowerSec />
      </div>
    </motion.div>
  );
}
