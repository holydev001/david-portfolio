"use client";

export default function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glowing blurry circles (GPU optimized) */}
      <div
        className="absolute top-1/2 left-20 w-80 h-72 rounded-full bg-blue-500/40 blur-[120px]"
        style={{ willChange: "transform, opacity" }}
      />

      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-500/40 blur-[150px]"
        style={{ willChange: "transform, opacity" }}
      />

      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-400/40 blur-[100px]"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Floating outlined circles (transform-only animation) */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full border border-blue-500 animate-float-slow" />

      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full border border-blue-500 animate-float-medium" />

      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 rounded-full border border-blue-500 animate-float-fast" />

      <div className="absolute top-10 right-20 w-16 h-16 rounded-full border border-blue-500 animate-float-xslow" />
    </div>
  );
}
