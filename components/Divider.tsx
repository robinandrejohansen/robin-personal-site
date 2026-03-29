"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Divider({ label }: { label?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="px-6 lg:px-12 py-8 lg:py-12">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: 1,
          backgroundColor: "var(--border)",
          originX: 0,
        }}
      />
      {label && (
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            marginTop: 10,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
