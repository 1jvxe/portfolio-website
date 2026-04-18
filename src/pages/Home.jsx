import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCode,
  FiFigma,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMonitor,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import yourPhoto from "/NewProfpic.JPG";

const introStats = [
  { value: "Frontend", label: "Modern interfaces for web products" },
  { value: "UI Motion", label: "Smooth Framer Motion interactions" },
  { value: "Responsive", label: "Built carefully for desktop and mobile" },
];

const highlights = [
  {
    icon: <FiLayers size={20} />,
    title: "Thoughtful UI systems",
    text: "Design-forward layouts with reusable structures, clear hierarchy, and strong spacing.",
  },
  {
    icon: <FiZap size={20} />,
    title: "Fast, smooth interactions",
    text: "Micro-animations and transitions that add energy without slowing the experience down.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    title: "Growth mindset",
    text: "Always refining design taste, React skills, and implementation quality from project to project.",
  },
];

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building polished interfaces with React, TypeScript, and Tailwind CSS while keeping layouts scalable and easy to maintain.",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    icon: <FiCode size={20} />,
  },
  {
    title: "UI Engineering",
    description:
      "Turning design ideas into responsive, smooth user experiences with strong spacing, motion, and visual hierarchy.",
    tools: ["Component Systems", "Responsive Design", "Framer Motion"],
    icon: <FiMonitor size={20} />,
  },
  {
    title: "Design & Prototyping",
    description:
      "Exploring structure, styling, and interaction ideas in Figma before bringing them into production-ready frontend code.",
    tools: ["Figma", "Wireframing", "Prototyping"],
    icon: <FiFigma size={20} />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <section className="section-wrap pb-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="glass-panel overflow-hidden rounded-[36px] p-7 md:p-10"
        >
          <motion.span variants={item} className="section-label">
            <span className="accent-dot" />
            Frontend Developer based in Tbilisi
          </motion.span>

          <motion.h1
            variants={item}
            className="hero-title mt-6 max-w-4xl text-5xl font-extrabold leading-[0.95] text-[var(--text)] md:text-7xl"
          >
            I build interfaces that feel
            <span className="text-accent"> modern</span>,
            <span className="text-accent"> smooth</span>, and alive.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl"
          >
            I&apos;m Abdal-Rahman Tawakalna, a frontend developer focused on
            clean React builds, engaging UI motion, responsive design, and the
            kind of visual detail that makes a portfolio feel memorable.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/projects" className="primary-button">
              View Projects
              <FiArrowRight />
            </Link>
            <Link to="/contact" className="secondary-button">
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/1jvxe"
              target="_blank"
              rel="noreferrer"
              className="secondary-button px-5 py-3 text-sm"
            >
              <FiGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdal-rahman-tawakalna-a267b23b2"
              target="_blank"
              rel="noreferrer"
              className="secondary-button px-5 py-3 text-sm"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            {introStats.map((stat) => (
              <div
                key={stat.value}
                className="soft-card rounded-[26px] p-5 text-left"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]/70">
                  Focus
                </p>
                <p className="mt-3 text-xl font-extrabold text-[var(--text)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-panel relative overflow-hidden rounded-[36px] p-5 md:p-7">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--accent-glow)] blur-3xl" />
            <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-[var(--secondary-glow)] blur-3xl" />
            <div className="relative rounded-[28px] border border-[var(--image-frame)] bg-[var(--image-bg)] p-3">
              <img
                src={yourPhoto}
                alt="Abdal-Rahman Tawakalna"
                className="h-[26rem] w-full rounded-[24px] object-cover object-center md:h-[34rem]"
              />
            </div>
            <div className="relative mt-5 flex items-center justify-between rounded-[24px] bg-[var(--text)] px-5 py-4 text-[var(--bg)] shadow-xl">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-soft-text)]">
                  Current Direction
                </p>
                <p className="mt-1 text-lg font-semibold">
                  React, TypeScript, Tailwind, and motion-rich UI.
                </p>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {highlights.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.12, duration: 0.5 }}
                className="soft-card rounded-[28px] p-6"
              >
                <div className="inline-flex rounded-2xl bg-[var(--soft-accent)] p-3 text-[var(--secondary)]">
                  {card.icon}
                </div>
                <h2 className="mt-4 text-xl font-bold text-[var(--text)]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 glass-panel rounded-[36px] p-7 md:p-10"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">
              <span className="accent-dot" />
              Skills & Workflow
            </span>
            <h2 className="display-title mt-5 text-3xl font-extrabold text-[var(--text)] md:text-5xl">
              Frontend, UI, and design thinking in one workflow.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              I enjoy moving from idea to interface by combining frontend
              engineering with visual polish and prototyping. My stack centers
              on React, TypeScript, Tailwind CSS, and Figma.
            </p>
          </div>
          <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-4 text-sm font-semibold text-[var(--muted)]">
            Search-ready branding for
            <span className="ml-1 text-[var(--text)]">abdtawakalna.com</span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.12, duration: 0.45 }}
              className="soft-card rounded-[30px] p-6"
            >
              <div className="inline-flex rounded-2xl bg-[var(--soft-accent)] p-3 text-[var(--accent-dark)]">
                {skill.icon}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[var(--text)]">
                {skill.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {skill.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
