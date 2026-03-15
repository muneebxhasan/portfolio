"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#tech" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    if (y > lastY.current && y > 80) setHidden(true);
    else setHidden(false);
    lastY.current = y;
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        backgroundColor: scrolled ? "rgba(14,16,8,0.82)" : "transparent",
        transition: "background-color 0.4s, border-color 0.4s",
      }}
    >
      <nav
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logotype */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: "2px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            MH
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--accent)",
              letterSpacing: "0.08em",
              marginLeft: "4px",
              alignSelf: "center",
            }}
          >
            .dev
          </span>
        </motion.a>

        {/* Links */}
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "2.25rem",
            listStyle: "none",
          }}
        >
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 + i * 0.06 }}
                className="accent-underline"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.a
          href="https://github.com/muneebxhasan"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--accent)",
            textDecoration: "none",
            padding: "0.4rem 0.9rem",
            border: "1px solid var(--accent-line)",
            borderRadius: "4px",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-line)";
          }}
        >
          GitHub ↗
        </motion.a>
      </nav>
    </motion.header>
  );
}
