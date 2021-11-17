import React from "react";

export const LeaderboardItem = ({ username, score }) => {
  return (
    <div>
      <h1 className="username">{username}</h1>
      <p>{score}</p>
    </div>
  );
};
