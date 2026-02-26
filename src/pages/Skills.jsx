import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "REST APIs",
];

function Skills() {
  return (
    <div className="page">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;