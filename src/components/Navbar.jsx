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
            <span className="icon-name">Home</span>
          </div>
          <div className="item">
            <IoMdInformationCircle className="icon" />
            <span>About</span>
          </div>
          <div className="item">
            <GiBullseye className="icon" />
            <span>Skills</span>
          </div>
          <div className="item">
            <IoMdContact className="icon" />
            <span>Contact</span>
          </div>
          <a href="public\Kaveen Wickramasinghe CV.pdf" download>
            <button className="btn">Download CV</button>
          </a>
        </div>
    </div>
  );
};

export default Navbar;
