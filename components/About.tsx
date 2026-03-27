"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const meta = [
  { label: "Status", value: "Available for new projects" },
  { label: "Location", value: "Oslo, Norway" },
  { label: "Stack", value: "Next.js · React Native · AI/LLMs" },
  { label: "Focus", value: "AI-native consumer apps" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="px-6 lg:px-12 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-2">
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
            }}
          >
            // ABOUT.txt
          </span>
          <div style={{ height: 1, flex: 1, backgroundColor: "var(--border)" }} />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--ink-faint)",
              letterSpacing: "0.08em",
            }}
          >
            Last modified: {new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            lineHeight: 1,
          }}
        >
          About
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: prose */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              borderLeft: "2px solid var(--accent)",
              paddingLeft: 20,
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                lineHeight: 1.65,
                color: "var(--ink)",
                fontStyle: "italic",
                marginBottom: 20,
                fontWeight: 300,
              }}
            >
              I build AI-native products that sit at the intersection of real-world expertise
              and modern technology.
            </p>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                lineHeight: 1.85,
                color: "var(--ink-muted)",
                marginBottom: 16,
              }}
            >
              Each app I build starts with a domain — real estate, football, golf — and finds
              the exact friction point where AI can feel like a natural extension of a human
              expert rather than a chatbot.
            </p>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                lineHeight: 1.85,
                color: "var(--ink-muted)",
              }}
            >
              The pattern: an AI agent with deep domain knowledge, a clean interface that gets
              out of the way, and a distribution channel the target user already trusts.
            </p>
          </div>
        </motion.div>

        {/* Right: metadata panel */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              border: "1px solid var(--border)",
              padding: "1px",
              backgroundColor: "var(--bg-alt)",
            }}
          >
            {/* Panel header bar */}
            <div
              style={{
                backgroundColor: "var(--ink)",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(248,246,241,0.6)",
                }}
              >
                system_info.txt
              </span>
            </div>

            {/* Meta rows */}
            <div style={{ padding: "16px 12px" }}>
              {meta.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: 8,
                    padding: "8px 0",
                    borderBottom: i < meta.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--ink-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--ink)",
                    }}
                  >
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
