import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { BackButton } from "../BackButton";
import "./style.css";

const NavBar = () => {
  const navBtn = useRef();
  const navBar = useRef();


  const showNav = () => {
    switch (navBtn.current.id) {
      case 'nav-btn-burger':
        navBtn.current.innerHTML = '&times;';
        navBtn.current.id = 'nav-btn-cross';
        navBar.current.id = 'show';
        break;
      case 'nav-btn-cross':
        navBtn.current.innerHTML = '&#9776;';
        navBtn.current.id = 'nav-btn-burger';
        navBar.current.id = 'hide';
        break;
    }
  }

  return (
    <>
      <div ref= {navBtn} id='nav-btn-burger' onClick={showNav}>&#9776;</div>
      <nav ref={navBar} id='hide' className="links-container" role="navigation">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/Leaderboard">
          Leaderboard
        </NavLink>
        <NavLink className="links" to="/categories">
          New Quiz
        </NavLink>
        <NavLink className="links" to="/about">
          About
        </NavLink>
        <BackButton />
      </nav>
    </>
  );
};

export { NavBar };
