"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 35 });

  const trailX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const trailY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleEnter = () => { isHovering.current = true; };
    const handleLeave = () => { isHovering.current = false; };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trail dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-multiply"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: 24,
          height: 24,
          borderRadius: "50%",
          border: "1px solid var(--ink-muted)",
          opacity: 0.4,
        }}
      />
      {/* Sharp cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "0",
          backgroundColor: "var(--ink)",
        }}
      />
    </>
  );
}
