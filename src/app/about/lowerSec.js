"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/data/data";

export default function LowerSec() {
  return (
    <section className="w-full">
      <h1 className="mb-6 w-full text-center text-[25px] font-semibold">
        Projects
      </h1>

      <div className="flex w-full flex-col gap-8 md:flex-row md:mb-[50px] mb-[100px]">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/about/${project.slug}`}
            className="flex-1"
          >
            <motion.div
              className="relative h-full cursor-pointer overflow-hidden rounded-2xl border-2 border-blue-500 backdrop-blur-[3px]"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              {/* Project Image */}
              <motion.img
                src={project.coverImage}
                alt={project.name}
                className="h-full w-full object-cover object-center"
                variants={{
                  rest: { scale: 1, opacity: 0.25 },
                  hover: { scale: 1.05, opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Overlay */}
              <motion.div
                variants={{
                  rest: { y: "100%", opacity: 0 },
                  hover: { y: "50%", opacity: 1 },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute inset-0 flex flex-col items-center justify-start rounded-2xl border-t-2 border-blue-400 bg-[rgba(3,150,255,0.1)] px-4 pt-[10px] text-center backdrop-blur-md"
              >
                <h3
                  className={`text-[30px] font-semibold ${project.textColor}`}
                >
                  {project.name}
                </h3>

                <p className={`mt-2 ${project.textColor}`}>
                  {project.shortDescription}
                </p>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
