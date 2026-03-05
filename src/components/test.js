"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypingTexts() {
  // === Description text (typed once) ===
  const description = "Passionate developer building interactive web experiences";

  // === Occupation texts (typed + erased in sequence) ===
  const roles = ["Frontend", "Backend", "UI/UX", "Fullstack"];

  // States
  const [desc, setDesc] = useState("");
  const [role, setRole] = useState("");
  const [phase, setPhase] = useState("typing-desc"); // "typing-desc", "cycling-roles", "done"
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Speeds
  const descSpeed = 25;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 700;

  // === Description typing (only once) ===
  useEffect(() => {
    if (phase !== "typing-desc") return;

    if (desc.length < description.length) {
      const t = setTimeout(
        () => setDesc(description.slice(0, desc.length + 1)),
        descSpeed
      );
      return () => clearTimeout(t);
    } else {
      // Move on to occupations after description finishes
      setPhase("cycling-roles");
    }
  }, [desc, description, phase]);

  // === Occupation typing/erasing ===
  useEffect(() => {
    if (phase !== "cycling-roles") return;
    let timeout;

    const currentWord = roles[roleIndex];

    if (!deleting) {
      // typing
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setRole(currentWord.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typeSpeed);
      } else {
        // word complete
        if (roleIndex === roles.length - 1) {
          // Last word = Fullstack -> stop, glow it
          setPhase("done");
        } else {
          timeout = setTimeout(() => setDeleting(true), pauseTime);
        }
      }
    } else {
      // deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setRole(currentWord.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, deleteSpeed);
      } else {
        // move to next word
        setDeleting(false);
        setRoleIndex((i) => i + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, deleting, charIndex, roleIndex, roles]);

  return (
    <div className="space-y-4">
      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg md:text-xl font-mono"
      >
        {desc}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-5 bg-current ml-1 align-middle"
        />
      </motion.p>

      {/* Occupation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-2xl md:text-3xl font-mono font-semibold"
      >
        <span
          className={
            phase === "done"
              ? "text-purple-400 drop-shadow-[0_0_14px_rgba(168,85,247,0.9)]"
              : ""
          }
        >
          {role}
        </span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-7 bg-current ml-2 align-middle"
        />
      </motion.p>
    </div>
  );
}
