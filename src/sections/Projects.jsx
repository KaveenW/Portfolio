import React from 'react'
import './projects.scss'
import { motion } from 'framer-motion'

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
    <section id='projects'>
        <h1>Projects</h1>
    </section>
  )
}

export default Projects
