import React from "react";
import "./skillcard.scss";
import { motion } from "framer-motion";
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeIn" },
  },
};
const SkillCard = ({ icon, skillName }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="skill-card"
    >
      <span>{icon}</span>
      <h3>{skillName}</h3>
    </motion.div>
  );
};

export default SkillCard;
