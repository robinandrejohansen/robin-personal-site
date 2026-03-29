"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const YCLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="4" fill="#FF6600"/>
    <path d="M8 8L14 16.5V20H14.8V16.5L20.8 8H19.7L14.4 15.3L9.1 8H8Z" fill="white"/>
  </svg>
);

const credentials = [
  {
    icon: <YCLogo />,
    label: "Y Combinator",
    description: "Built Dimora with a YC founder",
    year: "2025",
  },
  {
    icon: (
      <div style={{ 
        width: 28, 
        height: 28, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "var(--ink)",
        borderRadius: 4,
        color: "var(--bg)",
        fontFamily: "var(--serif)",
        fontWeight: 500,
        fontSize: 13,
      }}>
        20+
      </div>
    ),
    label: "Countries",
    description: "Pep Football used globally",
    year: "2025",
  },
  {
    icon: (
      <div style={{ 
        width: 28, 
        height: 28, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "var(--ink)",
        borderRadius: 4,
        color: "var(--bg)",
        fontFamily: "var(--serif)",
        fontWeight: 500,
        fontSize: 14,
      }}>
        4
      </div>
    ),
    label: "Products shipped",
    description: "AI-native apps across domains",
    year: "2024–26",
  },
];

export default function Credentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="px-6 lg:px-12 py-20 lg:py-28">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12 lg:mb-16"
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
          }}
        >
          // Credentials
        </span>
        <div style={{ height: 1, flex: 1, backgroundColor: "var(--border)" }} />
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {credentials.map((cred, i) => (
          <motion.div
            key={cred.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group"
            style={{
              border: "1px solid var(--border)",
              padding: 20,
              backgroundColor: "var(--surface)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Corner accent for first card */}
            {i === 0 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 48,
                  height: 48,
                  background: "linear-gradient(135deg, transparent 50%, rgba(255,102,0,0.08) 50%)",
                }}
              />
            )}

            <div className="flex items-start gap-4">
              <div
                style={{
                  flexShrink: 0,
                  opacity: 0.9,
                }}
              >
                {cred.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "var(--ink)",
                    marginBottom: 4,
                  }}
                >
                  {cred.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--ink-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {cred.description}
                </div>
              </div>
              {cred.year && (
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9,
                    color: "var(--ink-faint)",
                    letterSpacing: "0.08em",
                    flexShrink: 0,
                  }}
                >
                  {cred.year}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
