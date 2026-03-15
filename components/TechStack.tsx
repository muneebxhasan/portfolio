"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const techGroups = [
  {
    label: "Frontend",
    items: [
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript", icon: "js" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Python", icon: "py" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "GraphQL", icon: "graphql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Kafka", icon: "kafka" },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Azure", icon: "azure" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    label: "Systems",
    items: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
    ],
  },
];

const shieldsItems = [
  {
    name: "n8n",
    badge: "https://img.shields.io/badge/n8n-EA4B71?style=flat&logo=n8n&logoColor=white",
  },
  {
    name: "Stripe",
    badge: "https://img.shields.io/badge/Stripe-635BFF?style=flat&logo=stripe&logoColor=white",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 68, damping: 20 },
  },
};

const iconAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 130, damping: 14 },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const groupStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tech"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <motion.div
          variants={groupStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={reveal} className="eyebrow" style={{ marginBottom: "2.5rem" }}>
            Stack
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem 4rem",
            }}
          >
            {techGroups.map((group) => (
              <motion.div key={group.label} variants={reveal}>
                {/* Group label — mono ruled */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                    }}
                  >
                    {group.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "var(--border)",
                    }}
                  />
                </div>

                {/* Icon grid */}
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {group.items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={iconAnim}
                      whileHover={{ scale: 1.15, y: -2 }}
                      title={item.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        border: "1px solid var(--border)",
                        background: "var(--bg-raised)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "default",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--accent-line)";
                        (e.currentTarget as HTMLElement).style.background =
                          "var(--bg-surface)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--border)";
                        (e.currentTarget as HTMLElement).style.background =
                          "var(--bg-raised)";
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://skillicons.dev/icons?i=${item.icon}`}
                        alt={item.name}
                        width={24}
                        height={24}
                        style={{ display: "block" }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}

            {/* Automation & Payments */}
            <motion.div variants={reveal}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                  }}
                >
                  Automation
                </span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}
              >
                {shieldsItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={iconAnim}
                    whileHover={{ scale: 1.08, y: -1 }}
                    title={item.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.badge}
                      alt={item.name}
                      height={26}
                      style={{ display: "block", borderRadius: "3px" }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
