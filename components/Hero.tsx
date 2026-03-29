"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const TAGLINE = "Building AI-native products that feel like they belong in the real world.";

function TypeWriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (i.current >= text.length) { clearInterval(id); return; }
      setDisplayed(text.slice(0, i.current + 1));
      i.current++;
    }, 28);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="blink" style={{ color: "var(--accent)" }}>█</span>
      )}
    </span>
  );
}

import type { Variants } from "framer-motion";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-16 pt-28 px-6 lg:px-12 overflow-hidden dot-bg"
    >
      {/* 3D canvas — desktop only */}
      {isDesktop && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <Scene3D />
        </div>
      )}

      {/* Timestamp top right */}
      <motion.div
        className="absolute top-24 right-6 lg:right-12 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ zIndex: 1 }}
      >
        <div style={{ color: "var(--ink-faint)", fontSize: 10, letterSpacing: "0.12em" }}>
          ENTRY_001
        </div>
        <div style={{ color: "var(--ink-faint)", fontSize: 10, letterSpacing: "0.08em" }}>
          {new Date().toISOString().split("T")[0]}
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative max-w-3xl"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ zIndex: 1 }}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <div
            style={{
              width: 32,
              height: 1,
              backgroundColor: "var(--accent)",
            }}
          />
          <span
            style={{
              color: "var(--accent)",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "var(--mono)",
            }}
          >
            Builder · Oslo
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "2rem",
          }}
        >
          Robin
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            lineHeight: 1.8,
            color: "var(--ink-muted)",
            maxWidth: 420,
            marginBottom: "3rem",
          }}
        >
          <TypeWriter text={TAGLINE} />
        </motion.p>

        {/* Project quick links */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          {[
            { label: "openfnder.com", href: "https://openfnder.com", accent: true },
            { label: "dimora.no", href: "https://dimora.no" },
            { label: "pepfootball.com", href: "https://pepfootball.com" },
            { label: "swingcoach", href: "https://golf-coach-two.vercel.app" },
          ].map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tag hover:border-[var(--ink)] hover:text-[var(--ink)] transition-colors"
              style={{ 
                textDecoration: "none", 
                cursor: "none",
                borderColor: (p as { accent?: boolean }).accent ? "var(--accent)" : undefined,
                color: (p as { accent?: boolean }).accent ? "var(--accent)" : undefined,
              }}
            >
              ↗ {p.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-6 lg:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{ zIndex: 1 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "var(--ink-faint)",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <motion.div
            style={{ width: 1, height: 24, backgroundColor: "var(--ink-faint)", originY: 0 }}
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          Scroll
        </div>
      </motion.div>
    </section>
  );
}
