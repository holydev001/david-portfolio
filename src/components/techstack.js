"use client";

/**
 * ProgressiveBlur
 * - sideWidthClass: tailwind width class for each blur strip (e.g. "w-24", "w-32", "w-40")
 * - intensityClass: tailwind backdrop blur class (e.g. "backdrop-blur-sm", "backdrop-blur-xl", "backdrop-blur-3xl")
 * - tintClass: optional background tint to help blend with bg (e.g. "bg-black/20" or "bg-transparent")
 * - className: any extra classes
 */
export default function ProgressiveBlur({
  sideWidthClass = "w-[100px]",
  intensityClass = "backdrop-blur-3xl",
  tintClass = "bg-transparent",
  className = "",
}) {
  // Left -> mask fades to transparent to the right
  const leftMask = {
    WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, transparent 100%)",
    maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, transparent 100%)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };

  // Right -> mask fades to transparent to the left
  const rightMask = {
    WebkitMaskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, transparent 100%)",
    maskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, transparent 100%)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };

  return (
    <>
      <div
        aria-hidden
        className={`absolute left-0 top-0 h-full ${sideWidthClass} pointer-events-none ${intensityClass} ${tintClass} z-30 ${className}`}
        style={leftMask}
      />
      <div
        aria-hidden
        className={`absolute right-0 top-0 h-full ${sideWidthClass} pointer-events-none ${intensityClass} ${tintClass} z-30 ${className}`}
        style={rightMask}
      />
    </>
  );
}
