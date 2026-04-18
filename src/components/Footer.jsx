import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/1jvxe",
    label: "GitHub",
    icon: <FiGithub size={18} />,
  },
  {
    href: "https://www.linkedin.com/in/abdal-rahman-tawakalna-a267b23b2",
    label: "LinkedIn",
    icon: <FiLinkedin size={18} />,
  },
  {
    href: "mailto:abudytawakalna@gmail.com",
    label: "Email",
    icon: <FiMail size={18} />,
  },
];

function Footer() {
  return (
    <footer className="px-3 pb-6 pt-14 md:px-6">
      <div className="section-wrap soft-card rounded-[32px] px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="section-label">
              <span className="accent-dot" />
              Available for freelance and junior frontend roles
            </span>
            <h2 className="display-title mt-4 text-3xl font-bold text-[var(--text)] md:text-4xl">
              Building interfaces that feel clean, quick, and memorable.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Based in Tbilisi, focused on React experiences with strong visual
              hierarchy, thoughtful motion, and responsive detail.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--muted)] hover:-translate-y-1 hover:text-[var(--text)]"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
              <Link to="/about" className="hover:text-[var(--text)]">
                About
              </Link>
              <Link to="/projects" className="hover:text-[var(--text)]">
                Projects
              </Link>
              <Link to="/contact" className="hover:text-[var(--text)]">
                Contact
              </Link>
            </div>

            <p className="text-sm text-[var(--muted)]">
              © 2026 Abdal-Rahman Tawakalna. Crafted with React, TypeScript, and
              Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
