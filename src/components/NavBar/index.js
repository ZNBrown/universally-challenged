import React from "react";
import { NavLink } from "react-router-dom";
import { BackButton } from "../BackButton";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="links-container" role="navigation">
      <NavLink className="links" to="/">
        Home
      </NavLink>
      <NavLink className="links" to="/UserPage">
        New Game
      </NavLink>
      <NavLink className="links" to="/scores">
        Highscores
      </NavLink>
      <NavLink className="links" to="/about">
        About
      </NavLink>
      <BackButton />
    </nav>
  );
};

export { NavBar };
