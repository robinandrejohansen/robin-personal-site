"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(248, 246, 241, 0.85)",
        borderBottom: "1px solid var(--border)",
        borderBottomColor: `rgba(216,212,203,${borderOpacity})` as unknown as string,
      }}
    >
      <motion.a
        href="#"
        className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--ink)]"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textDecoration: "none" }}
      >
        Robin<span className="blink" style={{ color: "var(--accent)" }}>_</span>
      </motion.a>

      <nav className="flex items-center gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            style={{ textDecoration: "none" }}
          >
            <span style={{ color: "var(--ink-faint)", marginRight: 4 }}>
              {String(i + 1).padStart(2, "0")}.
            </span>
            {link.label}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
}
