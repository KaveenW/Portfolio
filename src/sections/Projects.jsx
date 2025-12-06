import React from "react";
import "./projects.scss";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import project1 from "../assets/project1.png";
import emochat from "../assets/emochat.png";
import cinemax from "../assets/cinemax.png";
import miniVersion from "../assets/miniVersion.png";
import flutter from "../assets/flutter.png";

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
          image={emochat}
          title="EmoChat"
          description="A smart chatbot that analyzes user emotions using NLP and provides contextual mental health support."
          tech="Python, Kotlin, AI, ML"
        />
        <ProjectCard
          image={cinemax}
          title="CineMax"
          description="A web application that allows users to track their tasks and manage their time effectively."
          tech="React, Typescript, HTML, CSS, TMDb API, Firebase Authentication, Firestore."
        />
        <ProjectCard
          image={miniVersion}
          title="Mini Version Control System"
          description="A lightweight version control tool that uses a command-line interface (CLI) to manage project states via snapshots and rollback functionality."
          tech="Python, Hashing libraries, Serialization tools."
        />
        <ProjectCard
          image={flutter}
          title="FlutterFlix"
          description="A cross-platform movie application built with Flutter and Dart, enabling users to browse, search, and manage favorite films from a comprehensive database."
          tech="Flutter, Dart, TMDb API, Firebase Authentication, Firestore."
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
