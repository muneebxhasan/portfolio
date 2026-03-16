"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#tech" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    if (y > lastY.current && y > 80) {
      setHidden(true);
      setMenuOpen(false);
    } else {
      setHidden(false);
    }
    lastY.current = y;
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px) saturate(160%)" : "none",
          backgroundColor: scrolled || menuOpen ? "rgba(14,16,8,0.95)" : "transparent",
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
            href="https://muneebhassan.me"
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
              .me
            </span>
          </motion.a>

          {/* Desktop links */}
          <motion.ul
            className="nav-links"
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
                    textDecoration: "none",
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

          {/* Desktop CTA */}
          <motion.a
            href="https://github.com/muneebxhasan"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
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

          {/* Hamburger button — mobile only */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "36px",
              height: "36px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              zIndex: 60,
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--text-primary)",
                transformOrigin: "center",
              }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--text-primary)",
              }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--text-primary)",
                transformOrigin: "center",
              }}
            />
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid var(--border)",
                backgroundColor: "rgba(14,16,8,0.98)",
              }}
            >
              <div
                style={{
                  padding: "1.5rem 2rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.2 }}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      padding: "0.9rem 0",
                      borderBottom: "1px solid var(--border)",
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
                ))}
                <motion.a
                  href="https://github.com/muneebxhasan"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.2 }}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    textDecoration: "none",
                    marginTop: "1.5rem",
                    alignSelf: "flex-start",
                    padding: "0.4rem 0.9rem",
                    border: "1px solid var(--accent-line)",
                    borderRadius: "4px",
                  }}
                >
                  GitHub ↗
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
