import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import yourPhoto from "/mine.jpg";

const Home = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-28 min-h-screen text-center">
      <img
        src={yourPhoto}
        alt="Abdal-Rahman"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto shadow-lg"
      />
      <br />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm Abdal-Rahman <br />
        Frontend Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 mt-6 max-w-xl mx-auto"
      >
        I build modern websites using React and Tailwind.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="fixed bottom-10 right-10 flex flex-col items-end space-y-2"
      >
        <p className="text-gray-400 text-sm">Are you curious about my work?</p>
        <Link
          to="/projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
