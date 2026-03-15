"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const roles = [
  "Full-Stack Developer",
  "Microservices Engineer",
  "AI Automation Builder",
  "Cloud Infrastructure Dev",
];

function useTypewriter(words: string[], speed = 65, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), speed / 2.2);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => w + 1);
    }
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  useEffect(() => {
    setDisplayed(words[wordIndex % words.length].slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return displayed;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const line = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 72, damping: 20 },
  },
};

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2rem 5rem",
        maxWidth: "1080px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Subtle radial bleed from top-left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10%",
          left: "-8%",
          width: "55vw",
          height: "55vw",
          maxWidth: "600px",
          maxHeight: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(139,158,195,0.055) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Eyebrow */}
        <motion.p variants={line} className="eyebrow" style={{ marginBottom: "2rem" }}>
          muneeb hassan — portfolio
        </motion.p>

        {/* Display headline */}
        <motion.h1
          variants={line}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
            fontWeight: 800,
            fontStyle: "italic",
            letterSpacing: "-0.035em",
            lineHeight: 1.0,
            color: "var(--text-primary)",
            marginBottom: "0.25em",
          }}
        >
          Building things
        </motion.h1>
        <motion.h1
          variants={line}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
            fontWeight: 800,
            fontStyle: "italic",
            letterSpacing: "-0.035em",
            lineHeight: 1.0,
            color: "var(--text-primary)",
            marginBottom: "2.25rem",
          }}
        >
          that{" "}
          <em
            style={{
              fontStyle: "normal",
              color: "var(--accent)",
            }}
          >
            scale.
          </em>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={line}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
            fontWeight: 400,
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
            marginBottom: "2.75rem",
            minHeight: "1.5em",
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <span style={{ color: "var(--accent)", opacity: 0.5 }}>~/</span>
          <span style={{ color: "var(--text-secondary)" }}>{role}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "var(--accent)",
              verticalAlign: "middle",
              animation: "blink 1.1s step-end infinite",
            }}
          />
          <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </motion.div>

        {/* Short bio */}
        <motion.p
          variants={line}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 400,
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "480px",
            marginBottom: "3rem",
          }}
        >
          Full-stack developer at UMT Lahore — building scalable web apps,
          event-driven APIs, and AI-powered automation workflows.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={line}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.01em",
              color: "var(--bg)",
              background: "var(--text-primary)",
              textDecoration: "none",
              padding: "0.7rem 1.6rem",
              borderRadius: "4px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#e8e8e0")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--text-primary)")
            }
          >
            View Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="accent-underline"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "0.875rem",
              letterSpacing: "0.01em",
              color: "var(--text-secondary)",
              textDecoration: "none",
              padding: "0.7rem 0.25rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
            }
          >
            Get in touch →
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={line}
          style={{
            marginTop: "5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <motion.div
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, var(--accent-line), transparent)",
              transformOrigin: "top",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
            }}
          >
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
