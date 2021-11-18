import React from "react";
import "./style.css";
import { LeaderboardTable } from "../../components";
import "animate.css";

export function Leaderboard() {
  return (
    <div>
      <h1 id="title" className="animate__animated animate__tada animate__delay-2s" >Kahtwoot!</h1>
      <h1>Top 10</h1>
      <LeaderboardTable currentUser={{}} />
    </div>
  );
}
