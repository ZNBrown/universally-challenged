import React from "react";
import "./style.css";

import { HomepageSelector } from "../../components";

export function Home() {
  return (
    <>
      <h1 id="title">Kahtwoot!</h1>

      <div id="cards">
          <HomepageSelector href="/UserPage" id="game-card" title="New Game" />

          <HomepageSelector href="/leaderboard" id="scores-card" title="Highscores" />

          <HomepageSelector href="/about" id="about-card" title="About" />

          <HomepageSelector href="/???" id="questionmark-card" title="???" />
      </div>
    </>
  );
}