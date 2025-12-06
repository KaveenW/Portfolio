import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import Particles from "../Particles.jsx";
import profile2 from "../assets/profile2.png";

const generateAnimation = (delay = 0.6) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

const About = () => {
  return (
    <section id="about">
      <div className="header">
        <motion.h1
          variants={generateAnimation(0.3)} // call function with delay
          initial="hidden"
          whileInView="visible" // animates when in viewport
          viewport={{ once: true }} // only animates once
        >
          About Me
        </motion.h1>
      </div>

      <div className="info">
        <motion.img
          src={profile2}
          alt="About Image"
          variants={generateAnimation(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          className="personal"
          variants={generateAnimation(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={generateAnimation(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Hey there!
          </motion.h2>
          <motion.p
            variants={generateAnimation(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I'm Kaveen Wickramasinghe, a passionate AI-driven Full-Stack
            Developer specializing in building intelligent, modern web
            applications. With a deep expertise spanning front-end engineering,
            robust server-side architecture, and the integration of machine
            learning models, I focus on crafting seamless user experiences
            powered by contextual, data-driven AI solutions. My goal is to
            create platforms that are not just functional, but genuinely smart
            and adaptive.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
