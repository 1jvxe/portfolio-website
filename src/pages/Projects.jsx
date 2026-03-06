import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    link: "https://your-portfolio-website.com",
  },
  {
    title: "Dashboard UI",
    description: "Modern admin dashboard design.",
    link: "https://your-dashboard-demo.com",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page design.",
    link: "https://your-landing-page.com",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-900 rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-3">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
