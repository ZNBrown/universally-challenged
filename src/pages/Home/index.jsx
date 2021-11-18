import React from "react";
import "./style.css";

import { HomepageSelector } from "../../components";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1 id="title">Kahtwoot!</h1>

      <div id="cards">

          <a href="/UserPage">
            <HomepageSelector id="game-card" title="New Game" />
          </a>

          <NavLink to='/leaderboard'>
            <HomepageSelector id="scores-card" title="Highscores" />
          </NavLink>

          <NavLink to='/about'>
            <HomepageSelector id="about-card" title="About" />
          </NavLink>

      </div>
    </>
  );
}