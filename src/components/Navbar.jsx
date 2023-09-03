import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// files
import "./Navbar.css";
import { links } from "../data";

// image
// import Logo from "../images/logo.png";

// icons
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isNavShowing, setisNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <p>BonitoSushi</p>
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setisNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// we are destructuring the object directly in the map method
// of  link in ul for nav_links
