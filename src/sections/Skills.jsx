import React from "react";
import "./skills.scss";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard.jsx";
import { DiSass } from "react-icons/di";
const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>

      <div className="container">
        <div className="skills-grid">
          <SkillCard
            skillName={"Javascript"}
            icon={<i className="devicon-javascript-plain colored"></i>}
          />
          <SkillCard
            skillName={"React"}
            icon={<i className="devicon-react-original colored"></i>}
          />
          <SkillCard
            skillName={"Node.js"}
            icon={<i className="devicon-nodejs-plain colored"></i>}
          />
          <SkillCard
            skillName={"Express.js"}
            icon={<i className="devicon-express-original colored"></i>}
          />
          <SkillCard
            skillName={"HTML5"}
            icon={<i className="devicon-html5-plain colored"></i>}
          />
          <SkillCard
            skillName={"CSS3"}
            icon={<i className="devicon-css3-plain colored"></i>}
          />
          <SkillCard
            skillName={"Scss"}
            icon={<DiSass className="scss-icon" />}
          />
          <SkillCard
            skillName={"Git"}
            icon={<i className="devicon-git-plain colored"></i>}
          />
          <SkillCard
            skillName={"GitHub"}
            icon={<i className="devicon-github-plain colored"></i>}
          />
          <SkillCard
            skillName={"C++"}
            icon={<i className="devicon-cplusplus-plain colored"></i>}
          />
          <SkillCard
            skillName={"Python"}
            icon={<i className="devicon-python-plain colored"></i>}
          />
          <SkillCard
          skillName={"Kotlin"}
          icon={<i className="devicon-kotlin-plain colored"></i>}
        />
        </div>
      </div>
    </section>
  );
};

export default Skills;
