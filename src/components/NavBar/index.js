import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { BackButton } from "../BackButton";
import "./style.css";

const NavBar = () => {
  const navBtn = useRef();
  const navBar = useRef();

  const closeNav = () => {
    navBtn.current.innerHTML = "&#9776;";
    navBtn.current.id = "nav-btn-burger";
    navBar.current.id = "hide";
  };

  const showNav = () => {
    switch (navBtn.current.id) {
      case "nav-btn-burger":
        navBtn.current.innerHTML = "&times;";
        navBtn.current.id = "nav-btn-cross";
        navBar.current.id = "show";
        break;
      case "nav-btn-cross":
        navBtn.current.innerHTML = "&#9776;";
        navBtn.current.id = "nav-btn-burger";
        navBar.current.id = "hide";
        break;
    }
  };

  return (
    <>
      <div id="btn-container">
        <BackButton />
        <div ref={navBtn} id="nav-btn-burger" onClick={showNav}>
          &#9776;
        </div>
      </div>

      <nav ref={navBar} id='hide' className="links-container" role="navigation">
        <NavLink aria-label='homepage link' onClick={closeNav} className="links" to="/">
          Home
        </NavLink>

        <NavLink aria-label='new quiz link' onClick={closeNav} className="links" to="/UserPage">
          New Game
        </NavLink>
        
        <NavLink aria-label='highscores link' onClick={closeNav} className="links" to="/scores">
          Highscores
        </NavLink>

        <NavLink aria-label='about link' onClick={closeNav} className="links" to="/about">
          About
        </NavLink>
      </nav>
    </>
  );
};

export { NavBar };
