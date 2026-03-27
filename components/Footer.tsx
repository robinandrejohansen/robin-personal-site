"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer id="contact" ref={ref} className="px-6 lg:px-12 py-16 border-t" style={{ borderColor: "var(--border)" }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10"
      >
        {/* Left: CTA */}
        <div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--ink-faint)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            // CONTACT
          </div>
          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Have a project in mind?<br />
            <em>Let&apos;s talk.</em>
          </h3>

          <a
            href="mailto:robin@example.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--ink)",
              textDecoration: "none",
              cursor: "none",
              borderBottom: "1px solid var(--ink)",
              paddingBottom: 2,
            }}
            className="hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            robin@example.com
            <span style={{ fontSize: 10 }}>→</span>
          </a>
        </div>

        {/* Right: links + copyright */}
        <div className="text-right">
          <div className="flex items-center gap-6 justify-end mb-6">
            {[
              { label: "GitHub", href: "https://github.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "X / Twitter", href: "https://x.com" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  textDecoration: "none",
                  cursor: "none",
                }}
                className="hover:text-[var(--ink)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--ink-faint)",
              letterSpacing: "0.06em",
            }}
          >
            © {new Date().getFullYear()} Robin — All rights reserved
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9,
              color: "var(--ink-faint)",
              letterSpacing: "0.06em",
              marginTop: 4,
            }}
          >
            Built with Next.js · Framer Motion · Three.js
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
