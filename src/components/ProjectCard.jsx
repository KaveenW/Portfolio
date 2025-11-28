import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./projectcard.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // automatically stagger children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeIn" },
  },
};
const ProjectCard = ({ image, title, description, tech }) => {
  return (
    <motion.div
      className="project-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.img
        src={image}
        alt={title}
        className="project-image"
        variants={itemVariants}
      />

      <div className="info">
        <motion.h3 className="project-title" variants={itemVariants}>
          <h2 className="title">{title}</h2>
          <FaExternalLinkAlt className="external-link-icon" />
        </motion.h3>
        <motion.p className="project-description" variants={itemVariants}>
          {description}
        </motion.p>
        <motion.p className="project-tech" variants={itemVariants}>
          {tech}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
