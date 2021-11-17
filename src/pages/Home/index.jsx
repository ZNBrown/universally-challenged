import React from "react";
import "./style.css";

import { HomepageSelector } from "../../components";

export function Home() {
  return (
    <>
    <div className="backgroundWrapper"></div>
      <h1 id="title">Kahtwoot!</h1>

      <div id="cards">
        <a href="/UserPage">
          <HomepageSelector id="game-card" title="New Game" />
        </a>

        <a href="/leaderboard">
          <HomepageSelector id="scores-card" title="Highscores" />
        </a>

        <a href="/about">
          <HomepageSelector id="about-card" title="About" />
        </a>

        <a href="/???">
          <HomepageSelector id="questionmark-card" title="???" />
        </a>
      </div>
    </>
  );
}