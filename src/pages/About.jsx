import { motion } from "framer-motion";
import { FiCode, FiCompass, FiFeather, FiUser } from "react-icons/fi";

const qualities = [
  {
    icon: <FiCode size={20} />,
    title: "Frontend foundation",
    text: "React, Tailwind CSS, TypeScript, and a steady habit of learning by building real interfaces.",
  },
  {
    icon: <FiFeather size={20} />,
    title: "Design sensitivity",
    text: "I care about spacing, readability, and the kind of polish that makes a page feel intentional.",
  },
  {
    icon: <FiCompass size={20} />,
    title: "Always leveling up",
    text: "I keep exploring better UI patterns, cleaner code structure, and more refined motion design.",
  },
];

function About() {
  return (
    <section className="section-wrap pb-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[36px] p-7 md:p-10"
        >
          <span className="section-label">
            <span className="accent-dot" />
            About Me
          </span>
          <h1 className="display-title mt-6 text-4xl font-extrabold text-[var(--text)] md:text-6xl">
            A developer who likes turning clean ideas into polished screens.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            I&apos;m Abdal-Rahman Tawakalna, a Computer Science student in Tbilisi
            and a frontend developer who enjoys creating interfaces that feel
            modern, responsive, and easy to use.
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            My work is driven by a mix of curiosity and discipline. I like
            taking a simple concept, shaping the layout carefully, and then
            adding the kind of motion and visual rhythm that makes the final
            result feel complete.
          </p>
          <div className="mt-8 soft-card rounded-[28px] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[var(--text)] p-3 text-[var(--bg)]">
                <FiUser size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]/70">
                  Current Goal
                </p>
                <p className="text-lg font-semibold text-[var(--text)]">
                  Grow into a stronger frontend engineer through real-world work.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-5"
        >
          {qualities.map((quality, index) => (
            <motion.article
              key={quality.title}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.12, duration: 0.45 }}
              className="soft-card rounded-[30px] p-7"
            >
              <div className="inline-flex rounded-2xl bg-[var(--soft-accent)] p-3 text-[var(--accent-dark)]">
                {quality.icon}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-[var(--text)]">
                {quality.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {quality.text}
              </p>
            </motion.article>
          ))}

          <div className="grid gap-5 md:grid-cols-2">
            <div className="soft-card rounded-[28px] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]/70">
                Based In
              </p>
              <p className="mt-3 text-2xl font-bold text-[var(--text)]">
                Tbilisi, Georgia
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Studying, building, and sharpening my frontend craft every day.
              </p>
            </div>
            <div className="soft-card rounded-[28px] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]/70">
                Interested In
              </p>
              <p className="mt-3 text-2xl font-bold text-[var(--text)]">
                UI/UX and motion
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Especially interfaces that balance clarity, aesthetics, and usability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
