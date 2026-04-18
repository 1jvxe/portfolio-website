import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiFigma,
  FiLayout,
  FiMonitor,
} from "react-icons/fi";

const projects = [
  {
    title: "Personal Portfolio Platform",
    category: "Live Brand Site",
    description:
      "A modern portfolio built to present my frontend work, technical stack, theme system, and visual identity under my own custom domain.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    icon: <FiMonitor size={20} />,
    href: "https://github.com/1jvxe",
    linkLabel: "View GitHub",
  },
  {
    title: "UI Systems & Components",
    category: "Interface Work",
    description:
      "Reusable layouts, polished cards, responsive sections, and motion-driven interactions designed to make interfaces feel structured and smooth.",
    tech: ["Design Systems", "Framer Motion", "Responsive UI"],
    icon: <FiLayout size={20} />,
    href: "https://github.com/1jvxe",
    linkLabel: "Explore More",
  },
  {
    title: "Figma to Frontend Workflow",
    category: "Design Process",
    description:
      "Prototyping visual direction and user flow in Figma, then translating those ideas into clean production-ready frontend implementation.",
    tech: ["Figma", "Prototyping", "UI Engineering"],
    icon: <FiFigma size={20} />,
    href: "https://github.com/1jvxe",
    linkLabel: "See Process",
  },
];

function Projects() {
  return (
    <section className="section-wrap pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-[36px] p-7 md:p-10"
      >
        <span className="section-label">
          <span className="accent-dot" />
          Selected Work
        </span>
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="display-title text-4xl font-extrabold text-[var(--text)] md:text-6xl">
              Projects shaped around frontend craft, visual clarity, and smoother interaction.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              This section is now tailored to your actual direction: personal
              branding, UI engineering, and the bridge between Figma concepts and
              responsive React implementation.
            </p>
          </div>
          <a
            href="https://github.com/1jvxe"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Browse GitHub
            <FiArrowUpRight />
          </a>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.12, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="soft-card group flex h-full flex-col rounded-[32px] p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="inline-flex rounded-2xl bg-[var(--soft-accent)] p-3 text-[var(--secondary)]">
                {project.icon}
              </div>
              <span className="rounded-full bg-[var(--text)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--bg)]">
                {project.category}
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[var(--text)]">
              {project.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8 text-sm font-semibold text-[var(--text)]">
              <span className="inline-flex items-center gap-2 group-hover:gap-3">
                {project.linkLabel}
                <FiArrowUpRight />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
