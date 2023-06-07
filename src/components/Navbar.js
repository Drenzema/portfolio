import React, { useState } from "react";
import { Link } from "react-scroll";

import "../assets/general/Navbar.css";

const NavBar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="animate-slideIn">
            <Link
              to="about"
              className="nav-item"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              about
            </Link>
          </li>
          <li className="animate-slideIn">
            <Link
              to="works"
              className="nav-item"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              works
            </Link>
          </li>
          <li className="animate-slideIn">
            <Link
              to="contact"
              className="nav-item"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
