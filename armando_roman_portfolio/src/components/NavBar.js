import React from "react";
import { Link } from "react-scroll";

import logo from "../assests/images/logo.svg";
import linked from "../assests/images/linked.svg";
import github from "../assests/images/github.svg";

const NavBar = props => {


  return (
    <div className="nav-bar">
      <img src={logo} alt="logo" />
      <ul className="nav-links">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="landing-container"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="about-container"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="contact-container"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="social">
        <a href="https://www.linkedin.com/in/armando-roman-64a53a188/">
          <img src={linked} alt="linked in logo" />
        </a>
        <a href="https://github.com/armandoroman1016">
          <img src={github} alt="github logo" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
