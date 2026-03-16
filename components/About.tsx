"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 68, damping: 20 },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const stats = [
  { value: "4+", label: "Projects shipped" },
  { value: "3+", label: "Years building" },
  { value: "12+", label: "Technologies used" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={reveal} className="eyebrow" style={{ marginBottom: "2.5rem" }}>
            About
          </motion.p>

          {/* Two-column layout */}
          <div className="two-col">
            {/* Left — editorial text block */}
            <div>
              <motion.h2
                variants={reveal}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.12,
                  color: "var(--text-primary)",
                  marginBottom: "2rem",
                }}
              >
                Sharp code,{" "}
                <span style={{ color: "var(--accent)" }}>clear thinking</span>
              </motion.h2>

              <motion.p
                variants={reveal}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.975rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                I&apos;m Muneeb Hassan — a full-stack developer pursuing a BS in
                Cyber Security at the University of Management and Technology,
                Lahore.
              </motion.p>
              <motion.p
                variants={reveal}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.975rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                I build production-grade applications — Next.js frontends wired
                to Python + FastAPI microservices, event-driven with Kafka, 
                containerised with Docker, deployed through GitHub Actions to
                Azure.
              </motion.p>
              <motion.p
                variants={reveal}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.975rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                }}
              >
                Outside features: AI automation with n8n, and systems
                programming in C/C++ for when abstractions run out.
              </motion.p>
            </div>

            {/* Right — stats + links */}
            <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {/* Stats — clean ruled list */}
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={reveal}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "1.4rem 0",
                    borderTop: i === 0 ? "1px solid var(--border)" : "none",
                    borderBottom: "1px solid var(--border)",
                    gap: "1rem",
                  }}
                >
                  <span
                    className="display-num"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "2.4rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      textAlign: "right",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {s.label}
                  </span>
                </motion.div>
              ))}

              {/* Social links */}
              <motion.div
                variants={reveal}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  paddingTop: "1.75rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "GitHub", href: "https://github.com/muneebxhasan" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/muneebxhasan/" },
                  { label: "Twitter", href: "https://twitter.com/muneebxhasan" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="accent-underline"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    {link.label} ↗
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
