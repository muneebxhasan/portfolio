"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const projects = [
  {
    index: "01",
    title: "FullStack E-Commerce",
    description:
      "Production-ready storefront with product catalog, cart, checkout flow, and Stripe payments — built on Next.js App Router with full TypeScript coverage.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
    repo: "FullStackWebApplication-ecomerce",
  },
  {
    index: "02",
    title: "Event-Driven Microservices API",
    description:
      "Distributed backend using Apache Kafka for async event streaming across FastAPI services, with PostgreSQL, Docker, Kong API Gateway, and JWT auth.",
    tech: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Docker", "Stripe"],
    repo: "Event-Driven-Microservices-Architecture-Api",
  },
  {
    index: "03",
    title: "AI Interior Design Platform",
    description:
      "AI-assisted interior design tool with n8n automation pipelines, Next.js frontend, FastAPI backend, Docker orchestration, and JWT authentication.",
    tech: ["Next.js", "FastAPI", "n8n", "Docker", "Python", "Tailwind CSS"],
    repo: "interior__design",
  },
  {
    index: "04",
    title: "Azure Starter App",
    description:
      "Cloud-native Python application containerised with Docker and deployed to Microsoft Azure via automated GitHub Actions CI/CD pipelines.",
    tech: ["Python", "Azure", "Docker", "GitHub Actions"],
    repo: "AzureStarterApp",
  },
];

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
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
            Selected Work
          </motion.p>

          {/* Project list — editorial ruled rows */}
          <div>
            {projects.map((project, i) => (
              <ProjectRow key={project.repo} project={project} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const rowReveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 68, damping: 20, delay: index * 0.08 },
    },
  };

  return (
    <motion.a
      href={`https://github.com/muneebxhasan/${project.repo}`}
      target="_blank"
      rel="noreferrer"
      variants={rowReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      style={{
        display: "grid",
        gridTemplateColumns: "3.5rem 1fr auto",
        gap: "1.5rem 2.5rem",
        alignItems: "start",
        padding: "2rem 0",
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Hover fill */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        style={{
          position: "absolute",
          inset: "0 -1rem",
          background: "var(--bg-surface)",
          borderRadius: "6px",
          zIndex: 0,
          transition: "opacity 0.2s",
        }}
      />

      {/* Index */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          fontWeight: 400,
          color: "var(--text-faint)",
          letterSpacing: "0.1em",
          paddingTop: "0.25rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {project.index}
      </span>

      {/* Body */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 600,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            maxWidth: "600px",
            marginBottom: "1rem",
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                padding: "0.18rem 0.55rem",
                borderRadius: "3px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <motion.span
        variants={{ hover: { x: 4, color: "var(--accent)" } }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.2rem",
          color: "var(--text-faint)",
          paddingTop: "0.1rem",
          position: "relative",
          zIndex: 1,
          transition: "color 0.2s",
        }}
      >
        ↗
      </motion.span>
    </motion.a>
  );
}
