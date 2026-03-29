"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    id: "001",
    year: "Age 6–10",
    title: "The Early Signs",
    content: `Never fit in. Never wanted to.

While other kids followed the lesson, I sat in the back drawing in my notebooks. School felt like a cage — structured, predictable, suffocating. My mind needed freedom to wander, to create, to build things that didn't exist yet.

By 7, I was deep into computers. Not just using them — understanding them. By 10, I jailbroke my first iPhone and iPad. Not for piracy — for possibility. Custom features. Unlimited coins in games. The thrill of bending a system to my will.

Looking back, it was never about the hacks.
It was about refusing to accept "this is how it works."`,
    tags: ["Creativity", "Jailbreaking", "Early Hacker"],
  },
  {
    id: "002", 
    year: "Age 10–18",
    title: "The Competitive Years",
    content: `I poured the same obsessive energy into sports.

Football came fast. Then futsal — where I found my game. Quick feet, tight spaces, creative plays. I climbed through the ranks until I reached Champions League level, playing internationally.

Skiing too — twintips, park runs, the freedom of flight.

I wasn't just competing. I was proving something to myself: that the kid who couldn't sit still in class could go further than anyone expected. That intensity — that refusal to half-ass anything — became my operating system.`,
    tags: ["Futsal", "Champions League", "Twintips", "Intensity"],
  },
  {
    id: "003",
    year: "2023",
    title: "The Pivot",
    content: `Then AI happened.

Growing up, I was obsessed with Jarvis from Iron Man. An intelligent system that understood you, anticipated your needs, helped you build impossible things. It felt like science fiction.

Suddenly it wasn't.

I stepped back from professional futsal. Not because I fell out of love with the game — but because I'd found something that lit me up the same way computers did at age 7. The same way jailbreaking did at 10. The same way reaching Champions League did at 17.

I taught myself to code. Not the traditional way — through AI. Using the tools to learn the tools. Iterating fast. Building things that worked. Then building things that mattered.`,
    tags: ["Jarvis", "AI", "Self-taught", "Career Pivot"],
  },
  {
    id: "004",
    year: "2024–25",
    title: "The First Two Years",
    content: `I went all in.

Built Dimora with a YC founder — a voice AI agent for real estate. Shipped Pep Football — AI coaching in your pocket. Started SwingCoach — computer vision for golf swings.

Every project taught me something. Every failure made the next build faster. I stopped asking for permission and started shipping solutions.

The pattern became clear: find a domain with real expertise, find the friction point where AI can feel human, build fast, iterate faster.

Two years of learning compressed into what felt like a decade. Working with people at the top of their fields. Absorbing everything. Building my own playbook.`,
    tags: ["Dimora", "YC", "Pep Football", "SwingCoach", "Shipping"],
  },
  {
    id: "005",
    year: "2026",
    title: "The Vision",
    content: `Now I'm building what I wish existed when I started.

Openfnder is Cursor for product management. An AI that holds your entire startup context — your market, your users, your codebase, your roadmap. It helps you make the right decisions and build the right products. Not another chatbot. A co-founder that never sleeps.

I'm not scared of challenging markets.
I'm not scared of being wrong.
I'm not scared of having a strong opinion and defending it.

When I lock in, I stay locked until the problem is solved. Tunnel vision. Obsession. That same energy from age 7 — just pointed at bigger problems.

Sta på. Norwegian for "keep going." Keep pushing. Don't stop.

The dream from childhood — building my own Jarvis — isn't science fiction anymore.
It's the work.`,
    tags: ["Openfnder", "Cursor for PM", "Sta på", "Vision"],
  },
];

const traits = [
  { label: "Mode", value: "Builder" },
  { label: "Fuel", value: "Obsession" },
  { label: "Style", value: "Ship first, optimize later" },
  { label: "Philosophy", value: "If it exists, it can be better" },
  { label: "Weakness", value: "Patience with slow systems" },
  { label: "Superpower", value: "Learning by building" },
];

function ChapterBlock({ chapter, index }: { chapter: typeof chapters[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20 last:mb-0"
    >
      {/* Chapter header */}
      <div className="flex items-start gap-6 mb-6">
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "var(--ink-faint)",
            letterSpacing: "0.12em",
            minWidth: 40,
            paddingTop: 4,
          }}
        >
          [{chapter.id}]
        </div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                lineHeight: 1.1,
              }}
            >
              {chapter.title}
            </h3>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                flexShrink: 0,
              }}
            >
              {chapter.year}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pl-[64px]">
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            lineHeight: 1.9,
            color: "var(--ink-muted)",
            whiteSpace: "pre-line",
            maxWidth: 580,
          }}
        >
          {chapter.content}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {chapter.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="mt-12 ml-[64px]"
        style={{
          height: 1,
          backgroundColor: "var(--border)",
          maxWidth: 580,
        }}
      />
    </motion.div>
  );
}

export default function Story() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const traitsRef = useRef(null);
  const traitsInView = useInView(traitsRef, { once: true, margin: "-60px" });

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mb-20"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
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
            // story.md
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "1.5rem",
          }}
        >
          The path wasn&apos;t<br />
          <em style={{ fontStyle: "italic" }}>linear.</em>
        </h1>

        {/* Intro */}
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            lineHeight: 1.8,
            color: "var(--ink-muted)",
            maxWidth: 520,
          }}
        >
          A creative kid who couldn&apos;t sit still, became a competitive athlete,
          became a self-taught builder. Each chapter was training for the next.
        </p>
      </motion.div>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-16 max-w-6xl">
        {/* Left: Chapters */}
        <div>
          {chapters.map((chapter, i) => (
            <ChapterBlock key={chapter.id} chapter={chapter} index={i} />
          ))}
        </div>

        {/* Right: Sticky sidebar */}
        <div className="hidden lg:block">
          <motion.div
            ref={traitsRef}
            initial={{ opacity: 0, x: 20 }}
            animate={traitsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sticky top-32"
          >
            {/* Traits panel */}
            <div
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  backgroundColor: "var(--ink)",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(248,246,241,0.6)",
                  }}
                >
                  traits.config
                </span>
              </div>

              {/* Traits */}
              <div style={{ padding: "16px 14px" }}>
                {traits.map((trait, i) => (
                  <motion.div
                    key={trait.label}
                    initial={{ opacity: 0 }}
                    animate={traitsInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "90px 1fr",
                      gap: 8,
                      padding: "10px 0",
                      borderBottom: i < traits.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 9,
                        color: "var(--ink-faint)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {trait.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--ink)",
                      }}
                    >
                      {trait.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={traitsInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: 24,
                padding: 20,
                borderLeft: "2px solid var(--accent)",
                backgroundColor: "rgba(212,82,42,0.03)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  marginBottom: 8,
                }}
              >
                &ldquo;Sta på.&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--ink-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                Norwegian for &ldquo;keep going&rdquo;
              </p>
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={traitsInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              style={{
                marginTop: 24,
                padding: "16px 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "var(--ink-faint)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Timeline
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { year: "2013", event: "First jailbreak" },
                  { year: "2018", event: "Champions League futsal" },
                  { year: "2023", event: "Started coding with AI" },
                  { year: "2024", event: "Built with YC founder" },
                  { year: "2025", event: "4 products shipped" },
                  { year: "2026", event: "Building Openfnder" },
                ].map((m) => (
                  <div
                    key={m.year}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: "var(--accent)",
                        minWidth: 36,
                      }}
                    >
                      {m.year}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {m.event}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
