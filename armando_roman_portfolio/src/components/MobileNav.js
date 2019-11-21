import React from "react";
import { Link, animateScroll } from "react-scroll";

const MobileNav = () => {
  return (
    <div className="nav-bar">
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
            offset={-60}
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
            offset={-60}
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
            offset={-60}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
