"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 68, damping: 20 },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type FormState = "idle" | "sending" | "sent";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("sent");
  };

  return (
    <section
      id="contact"
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
            Contact
          </motion.p>

          <div className="contact-grid">
            {/* Left — editorial intro */}
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
                  marginBottom: "1.5rem",
                }}
              >
                Let&apos;s build
                <br />
                <span style={{ color: "var(--accent)" }}>something real.</span>
              </motion.h2>
              <motion.p
                variants={reveal}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.975rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Open to freelance projects, collaborations, and full-time
                opportunities. If you have a problem worth solving, I want to
                hear about it.
              </motion.p>
              <motion.a
                variants={reveal}
                href="mailto:muneebxhasan@gmail.com"
                className="accent-underline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
              >
                muneebxhasan@gmail.com
              </motion.a>
            </div>

            {/* Right — form */}
            <div>
              {formState === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring" as const, stiffness: 90, damping: 18 }}
                  style={{
                    padding: "2rem",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    background: "var(--bg-raised)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.3rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message sent.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    I&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={reveal}
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
                >
                  <div className="fields-row">
                    <Field
                      label="Name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    <label
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me what you're working on..."
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        background: "var(--bg-raised)",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                        padding: "0.75rem 1rem",
                        color: "var(--text-primary)",
                        resize: "vertical",
                        outline: "none",
                        transition: "border-color 0.2s",
                        lineHeight: 1.65,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent-line)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "sending"}
                    whileHover={{ scale: formState === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      alignSelf: "flex-start",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      letterSpacing: "0.01em",
                      padding: "0.7rem 1.6rem",
                      borderRadius: "4px",
                      border: "none",
                      cursor: formState === "sending" ? "not-allowed" : "pointer",
                      color: formState === "sending" ? "var(--text-muted)" : "var(--bg)",
                      background: formState === "sending" ? "var(--bg-raised)" : "var(--text-primary)",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (formState !== "sending")
                        (e.currentTarget as HTMLElement).style.background = "#e8e8e0";
                    }}
                    onMouseLeave={(e) => {
                      if (formState !== "sending")
                        (e.currentTarget as HTMLElement).style.background = "var(--text-primary)";
                    }}
                  >
                    {formState === "sending" ? "Sending..." : "Send message"}
                  </motion.button>
                </motion.form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
      <label
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          background: "var(--bg-raised)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          padding: "0.7rem 0.9rem",
          color: "var(--text-primary)",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--accent-line)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      />
    </div>
  );
}
