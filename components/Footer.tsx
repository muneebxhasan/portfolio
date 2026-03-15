"use client";

import { motion } from "motion/react";

const links = [
  { label: "GitHub", href: "https://github.com/muneebxhasan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muneebxhasan/" },
  { label: "Twitter", href: "https://twitter.com/muneebxhasan" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "3rem 2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Left — logotype + year */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            Muneeb Hassan
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              color: "var(--text-faint)",
              letterSpacing: "0.1em",
            }}
          >
            © {year}
          </span>
        </div>

        {/* Center — built with */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
          }}
        >
          Next.js · Motion · Playfair Display
        </span>

        {/* Right — nav links */}
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="accent-underline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
