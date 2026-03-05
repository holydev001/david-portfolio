"use client";

import FloatingCircles from "./FloatingCircles";
import BackgroundGrid from "./gridone";
import GridTwo from "./GridTwo";

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ willChange: "transform" }}
    >
      {/* Gradient base layer */}
      <div className="absolute inset-0 w-[150%] bg-gradient-to-tr from-[#000814] via-[#002f61] to-[#015cb3]" />

      {/* Animated layers */}
      <FloatingCircles />
      <GridTwo />
    </div>
  );
}
