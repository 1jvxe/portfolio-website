import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const aboutText = `
Hi! I'm Abdal-Rahman Tawakalna, a passionate Frontend Developer with a strong interest in creating
modern, responsive, and user-friendly web applications. Over the past few years, I have
dedicated myself to mastering technologies like React, Tailwind CSS, and JavaScript, while
constantly exploring new tools to enhance my skills.

Currently, I am in my final year of studying Computer Science at the University of Georgia in Tbilisi,
where I balance my studies with my passion for web development. This combination has taught me
discipline, time management, and the importance of consistent learning—qualities that I bring
into every coding project I work on.

I enjoy turning complex problems into simple, elegant solutions through clean code and
thoughtful design. My projects focus on creating interfaces that are visually appealing,
highly functional, and accessible to all users. I also have a strong interest in UI/UX
principles and understanding how design impacts user behavior.

In my free time, I enjoy going to the gym, building small personal projects, and exploring
emerging technologies that challenge me to grow as a developer. My ultimate goal is to
become a Frontend Developer who not only writes efficient, maintainable code but also contributes
to meaningful projects that positively impact users.

I'm always open to collaboration, learning opportunities, and challenges that push me to
improve. Let's build something amazing together!
`;

function About() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + aboutText[index]);
        setIndex(index + 1);
      }, 20); // typing speed (ms)
      return () => clearTimeout(timeout);
    }
  }, [index, displayedText]);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 whitespace-pre-line leading-relaxed text-lg"
      >
        {displayedText}
      </motion.p>
    </section>
  );
}

export default About;
