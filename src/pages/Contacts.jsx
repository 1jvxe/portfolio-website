import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const email = "abudytawakalna@gmail.com";

const contactItems = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: <FiMail size={20} />,
    note: "Best for opportunities and project conversations",
  },
  {
    label: "GitHub",
    value: "github.com/1jvxe",
    href: "https://github.com/1jvxe",
    icon: <FiGithub size={20} />,
    note: "Code, experiments, and future project updates",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdal-rahman-tawakalna",
    href: "https://www.linkedin.com/in/abdal-rahman-tawakalna-a267b23b2",
    icon: <FiLinkedin size={20} />,
    note: "Professional profile and networking",
  },
  {
    label: "Phone",
    value: "+995 595 568 805",
    href: "tel:+995595568805",
    icon: <FiPhone size={20} />,
    note: "Available for direct contact when needed",
  },
];

function Contacts() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="section-wrap pb-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[36px] p-7 md:p-10"
        >
          <span className="section-label">
            <span className="accent-dot" />
            Contact
          </span>
          <h1 className="display-title mt-6 text-4xl font-extrabold text-[var(--text)] md:text-6xl">
            Let&apos;s build something clean, useful, and memorable.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            If you&apos;re looking for a frontend developer who cares about visual
            quality, responsiveness, and smooth user experience, I&apos;d love to
            connect.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${email}`} className="primary-button">
              Send an Email
              <FiArrowUpRight />
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="secondary-button"
            >
              <FiCopy />
              {copied ? "Email Copied" : "Copy Email"}
            </button>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="soft-card rounded-[30px] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[var(--soft-accent)] p-3 text-[var(--secondary)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]/70">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--text)]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.note}
                    </p>
                  </div>
                </div>
                <FiArrowUpRight className="mt-1 text-[var(--muted)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
