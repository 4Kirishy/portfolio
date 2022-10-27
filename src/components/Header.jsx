import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const toggleBurger = () => {
    const prevValue = isActiveBurger;
    setIsActiveBurger(!prevValue);
  };

  return (
    <header className="header">
      <NavLink to="/portfolio" className="headerLogo">
        kt
      </NavLink>

      <ul className={`headerNavList ${isActiveBurger ? "_active" : ""}`}>
        <li className="headerNavItem">
          <NavLink
            to="/portfolio"
            end
            style={({ isActive }) => (isActive ? { color: "#000" } : {})}
            onClick={() => {
              setIsActiveBurger(false);
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="headerNavItem">
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? { color: "#000" } : {})}
            onClick={() => {
              setIsActiveBurger(false);
            }}
          >
            About
          </NavLink>
        </li>
        <li className="headerNavItem">
          <NavLink
            to="projects"
            style={({ isActive }) => (isActive ? { color: "#000" } : {})}
            onClick={() => {
              setIsActiveBurger(false);
            }}
          >
            Project
          </NavLink>
        </li>
        <li className="headerNavItem">
          <NavLink
            to="contact"
            style={({ isActive }) => (isActive ? { color: "#000" } : {})}
            onClick={() => {
              setIsActiveBurger(false);
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div
        className={`headerBurger ${isActiveBurger ? "_active" : ""}`}
        onClick={toggleBurger}
      >
        <span></span>
      </div>
    </header>
  );
};

export default Header;
