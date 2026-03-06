import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiCopy } from "react-icons/fi";
import { useState } from "react";

function Contacts() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abudytawakalna@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "abudytawakalna@gmail.com",
      action: handleCopyEmail,
      hoverText: copied ? "Copied!" : "Click to copy",
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/1jvxe",
      href: "https://github.com/1jvxe",
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/abdal-rahman-tawakalna",
      href: "https://www.linkedin.com/in/abdal-rahman-tawakalna-a267b23b2",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+995 595 568 805",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-center mb-12"
      >
        Feel free to reach out if you'd like to collaborate or discuss
        opportunities.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6">
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.2 }}
            className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-lg hover:scale-105 transition cursor-pointer"
            onClick={c.action ? c.action : undefined}
          >
            <div className="text-blue-500">{c.icon}</div>
            {c.href ? (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                {c.value}
              </a>
            ) : (
              <span className="text-gray-700 font-medium">{c.value}</span>
            )}
            {c.action && (
              <span className="ml-auto text-sm text-gray-400">
                {c.hoverText}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
