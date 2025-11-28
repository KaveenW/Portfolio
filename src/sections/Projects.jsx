import React from "react";
import "./projects.scss";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";

const generateAnimation = (delay = 0.6) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

const Projects = () => {
  return (
    <section id="projects">
      <div className="header">
        <motion.h1
          variants={generateAnimation(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
      </div>
      <div className="projects-grid">
        <ProjectCard
          image="src/assets/project1.png"
          title="EmoChat"
          description="A web application that allows users to track their tasks and manage their time effectively."
          tech="React, Node.js, MongoDB"
        />
        <ProjectCard
          image="src/assets/project1.png"
          title="CineMax"
          description="A web application that allows users to track their tasks and manage their time effectively."
          tech="React, Node.js, MongoDB"
        />
        <ProjectCard
          image="src/assets/project1.png"
          title="FlutterFlix"
          description="A web application that allows users to track their tasks and manage their time effectively."
          tech="React, Node.js, MongoDB"
        />
        <ProjectCard
          image="src/assets/project1.png"
          title="FlutterFlix"
          description="A web application that allows users to track their tasks and manage their time effectively."
          tech="React, Node.js, MongoDB"
        />
      </div>
      <motion.a
        variants={generateAnimation(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        href="https://github.com/KaveenW?tab=repositories"
        style={{ textDecoration: "none" }}
      >
        <button className="see-more-button">More Projects</button>
      </motion.a>
    </section>
  );
};
export default Projects;
