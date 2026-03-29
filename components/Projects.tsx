"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "001",
    name: "Openfnder",
    tagline: "Cursor for product management",
    description:
      "AI-native product management — auto-generates specs, syncs with your codebase, and keeps stakeholders aligned. One tool for the entire product lifecycle.",
    url: "openfnder.com",
    href: "https://openfnder.com",
    year: "2026",
    tags: ["AI Agent", "Product Management", "SaaS"],
    status: "BUILDING",
    featured: true,
  },
  {
    id: "002",
    name: "Dimora",
    tagline: "Virtual voice AI real estate agent",
    description:
      "An AI agent that handles property inquiries via natural voice conversation — qualifying leads, answering questions, booking viewings. Built with a YC founder.",
    url: "dimora.no",
    href: "https://dimora.no",
    year: "2025",
    tags: ["Voice AI", "Real Estate", "YC"],
    status: "LIVE",
    featured: true,
  },
  {
    id: "003",
    name: "Pep Football",
    tagline: "AI soccer coaching app — used in 20+ countries",
    description:
      "A virtual football coach in your pocket. Delivers drills, tactical analysis, and personalised training plans based on your position and goals. Used by players in 20+ countries.",
    url: "pepfootball.com",
    href: "https://pepfootball.com",
    year: "2025",
    tags: ["AI Coach", "React Native", "App Store", "20+ Countries"],
    status: "APP STORE",
  },
  {
    id: "004",
    name: "SwingCoach",
    tagline: "AI golf swing analysis",
    description:
      "Record your swing — the AI breaks it down frame by frame. Address, backswing, impact, follow-through. Trained on thousands of professional swings.",
    url: "golf-coach-two.vercel.app",
    href: "https://golf-coach-two.vercel.app",
    year: "2025",
    tags: ["Computer Vision", "Golf", "iOS"],
    status: "BETA",
  },
];

type Project = typeof projects[0];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", cursor: "none", display: "block" }}
        className="group"
      >
        <div
          className="py-10 lg:py-12 border-b transition-all duration-300"
          style={{
            borderColor: "var(--border)",
            backgroundColor: (project as Project & { featured?: boolean }).featured ? "rgba(212,82,42,0.02)" : "transparent",
            marginLeft: -24,
            marginRight: -24,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          {/* Row top: number + name + status + year */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-baseline gap-5">
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--ink-faint)",
                  letterSpacing: "0.1em",
                  minWidth: 28,
                }}
              >
                [{project.id}]
              </span>
              <div>
                <h3
                  className="group-hover:text-[var(--accent)] transition-colors"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    color: "var(--ink)",
                  }}
                >
                  {project.name}
                  <span
                    className="inline-block ml-3 align-middle opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontSize: "0.5em", color: "var(--accent)" }}
                  >
                    ↗
                  </span>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--ink-muted)",
                    marginTop: 4,
                    letterSpacing: "0.04em",
                  }}
                >
                  {project.tagline}
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div
                className="tag mb-2"
                style={{
                  color: project.status === "LIVE" ? "var(--accent)" : "var(--ink-muted)",
                  borderColor: project.status === "LIVE" ? "var(--accent)" : "var(--border)",
                }}
              >
                ● {project.status}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--ink-faint)",
                  letterSpacing: "0.08em",
                }}
              >
                {project.year}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pl-[52px] lg:pl-[80px]">
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                lineHeight: 1.75,
                color: "var(--ink-muted)",
                maxWidth: 560,
                marginBottom: 12,
              }}
            >
              {project.description}
            </p>

            {/* Tags + URL */}
            <div className="flex items-center flex-wrap gap-2">
              {project.tags.map((t) => (
                <span 
                  key={t} 
                  className="tag"
                  style={t === "YC" ? { 
                    backgroundColor: "#FF6600", 
                    color: "white", 
                    borderColor: "#FF6600",
                    fontWeight: 700,
                  } : {}}
                >
                  {t}
                </span>
              ))}
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--ink-faint)",
                  letterSpacing: "0.06em",
                }}
              >
                {project.url}
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="work" className="px-6 lg:px-12 py-32 lg:py-40">
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 lg:mb-20"
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
            // LOG
          </span>
          <div style={{ height: 1, flex: 1, backgroundColor: "var(--border)" }} />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--ink-faint)",
            }}
          >
            {projects.length} ENTRIES
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
          Work
        </h2>
      </motion.div>

      {/* Project list */}
      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
