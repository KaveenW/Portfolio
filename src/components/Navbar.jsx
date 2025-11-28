import React from "react";
import "./navbar.scss";
import { FaHome } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { GiBullseye } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Kaveen Wickramasinghe</h1>
      </div>
      <div className="right">
        <div className="item">
          <FaHome className="icon" />
          <a href="#hero">Home</a>
        </div>
        <div className="item">
          <IoMdInformationCircle className="icon" />
          <a href="#about">About</a>
        </div>
        <div className="item">
          <GiBullseye className="icon" />
          <a href="#projects">Projects</a>
        </div>
        <div className="item">
          <GiBullseye className="icon" />
          <a href="#skills">Skills</a>
        </div>
        <div className="item">
          <IoMdContact className="icon" />
          <a href="#contact">Contact</a>
        </div>
        <a href="public\Kaveen Wickramasinghe CV.pdf" download>
          <button className="btn">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
