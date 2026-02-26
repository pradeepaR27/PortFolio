import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Carbon Emission Tracker",
      description:
        "A web application that calculates the lowest carbon emission route between source and destination using Google Maps API.",
      tech: "React, Flask, Python, MySQL",
      github: "#",
      live: "#",
    },
    
  ];

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>My Projects</h1>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;