"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { House, Contact, Briefcase } from "lucide-react";
import { useMemo, useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeHref, setActiveHref] = useState(pathname);

  // ✅ Keep activeHref in sync (guarantees ONE active item)
  useEffect(() => {
    setActiveHref(pathname);
  }, [pathname]);

  // Pause animations when tab is inactive
  useEffect(() => {
    const onVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = useMemo(
    () => [
      { href: "/", icon: House },
      { href: "/about", icon: Briefcase },
      { href: "/contactPage", icon: Contact },
    ],
    [],
  );

  // ✅ Variants guarantee proper animation cleanup
  const iconVariants = {
    inactive: {
      y: 0,
      scale: 1,
    },
    active: {
      y: [0, -6, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={prefersReducedMotion ? false : { y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 10 }}
        className="fixed bottom-[30px] z-50 md:w-[500px] w-[80%]"
      >
        <div className="bg-[rgba(3,150,255,0.2)] backdrop-blur-[3px] w-full flex justify-around p-[18px] rounded-[22px] border-2 border-blue-500">
          {navItems.map(({ href, icon: Icon }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link key={href} href={href} className="flex items-center">
                <motion.div
                  variants={iconVariants}
                  initial="inactive"
                  animate={
                    isActive && isVisible && !prefersReducedMotion && !isMobile
                      ? "active"
                      : "inactive"
                  }
                  whileHover={prefersReducedMotion ? {} : { scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon
                    className={`w-[22px] h-[22px] transition-colors ${
                      isActive ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
