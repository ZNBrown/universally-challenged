import React from "react";
import { BackButton } from "../BackButton";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="links-container" role="navigation">
      <NavLink className="links" to="/">
        Home
      </NavLink>
      <NavLink className="links" to="/">
        New Quest
      </NavLink>
      <NavLink className="links" to="/scores">
        Scores
      </NavLink>
      <NavLink className="links" to="/????">
        ????
      </NavLink>
      <NavLink className="links" to="/about">
        About
      </NavLink>
      <BackButton />
    </nav>
  );
};

export { NavBar };
