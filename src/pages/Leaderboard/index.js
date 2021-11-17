import React from "react";
import "./style.css";
import { LeaderboardTable } from "../../components";

export function Leaderboard() {
  return (
    <div>
      <h1>Top 10</h1>
      <LeaderboardTable userData={null} />
    </div>
  );
}
