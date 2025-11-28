import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import "../styles/global.scss";
import Particles from "../Particles.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import profile2 from "../assets/profile2.png";
import project1 from "../assets/project1.png";
const animeTion = (delay = 0.6) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});
const Hero = () => {
  return (
    <section id="hero">
      <div className="particlesWrapper">
        <Particles
          particleColors={["#ffffff", "#6CA0DC", "#9B59B6", "#00FFFF"]}
          particleCount={300}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="container">
        <motion.img
          src={profile2}
          alt="Hero Image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          Hello, I'm <span>Kaveen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "circOut", delay: 0.6 }}
        >
          Full-stack developer crafting modern apps with clean code and
          meaningful design.
        </motion.p>

        <motion.div
          className="social-icons"
          variants={animeTion(0.9)}
          initial="hidden"
          animate="visible"
        >
          <a href="https://github.com/KaveenW">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/kaveen-wickramasinghe-b00bb72bb/">
            <FaLinkedin className="icon" />
          </a>
          <a href="">
            <FaInstagram className="icon" />
          </a>
          <a href="">
            <FaGoogle className="icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
