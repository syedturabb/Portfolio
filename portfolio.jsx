import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skillsLearned = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "JavaScript", level: 100 },
    { name: "C", level: 100 },
    { name: "C++", level: 100 },
    { name: "Python", level: 100 },
    { name: "R", level: 100 },
  ];

  const skillsProgress = [
    { name: "React", level: 60 },
    { name: "Node.js", level: 50 },
    { name: "MongoDB", level: 40 },
    { name: "Express", level: 45 },
    { name: "Data Science", level: 55 },
  ];

  const softSkills = ["Teamwork", "Problem Solving", "Communication", "Leadership"];

  const experiences = [
    {
      role: "Intern — Data Science & Analytics",
      company: "DeveloperHub Corporations",
      date: "Jun 2025 - Aug 2025",
      details: "Worked on real-world datasets, performed analysis, and built insights.",
    },
    {
      role: "Intern — Problem Solving & Web Development",
      company: "Crew Cortex (Low-code/No-code)",
      date: "Dec 2024 - Feb 2025",
      details: "Contributed to web development projects and solved practical problems.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Syed Muhammad Turab Haider</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <h2 className="text-4xl font-bold mb-4">Full-Stack Developer</h2>
        <p className="text-lg max-w-xl mx-auto">
          Passionate about building scalable applications and exploring Data
          Science. Skilled in HTML, CSS, JS, C++, Python, and R.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-16"
      >
        <h3 className="text-3xl font-semibold mb-6">Skills</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Learned */}
          <div>
            <h4 className="text-xl font-bold mb-4">Learned</h4>
            {skillsLearned.map((skill) => (
              <div key={skill.name} className="mb-3">
                <p>{skill.name}</p>
                <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
                  <motion.div
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* In Progress */}
          <div>
            <h4 className="text-xl font-bold mb-4">In Progress</h4>
            {skillsProgress.map((skill) => (
              <div key={skill.name} className="mb-3">
                <p>{skill.name}</p>
                <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h4 className="text-xl font-bold mb-4">Soft Skills</h4>
          <ul className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-purple-500 text-white rounded-full shadow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700"
      >
        <h3 className="text-3xl font-semibold mb-6">Experience</h3>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="p-6 border-l-4 border-blue-600 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <h4 className="text-xl font-bold">{exp.role}</h4>
              <p className="text-sm italic">
                {exp.company} | {exp.date}
              </p>
              <p className="mt-2">{exp.details}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-16"
      >
        <h3 className="text-3xl font-semibold mb-6 text-center">Contact Me</h3>
        <form className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded dark:bg-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded dark:bg-gray-900"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded h-32 dark:bg-gray-900"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-6 mt-8 border-t dark:border-gray-700">
        <p>© {new Date().getFullYear()} Syed Muhammad Turab Haider</p>
        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://github.com/syedturabb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/syed-muhammad-turab-haider"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
