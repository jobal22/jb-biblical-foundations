import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

export default function Menu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <div className="notHamburger">
            <span className="close-x"></span>
          </div>
        ) : (
          <div className="hamburger">
            <span /> <span /> <span />
          </div>
        )}
      </button>{" "}
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li>
          <NavLink
            to={"/"}
            activeclassname="active-link"
            onClick={() => closeMenu()}
            className="navlinkA"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeclassname="active-link"
            onClick={() => closeMenu()}
            className="navlinkA"
          >
            About
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/discipleship"
            activeclassname="active-link"
            onClick={() => closeMenu()}
            className="navlinkA"
          >
            Disciple
          </NavLink>
        </li>
      </ul>{" "}
    </nav>
  );
}