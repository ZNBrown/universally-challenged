import React from "react";

export const LeaderboardItem = ({ username, scoreTotal }) => {
  return (
    <div>
      <h1 className="username">{username}</h1>
      <p>{scoreTotal}</p>
    </div>
  );
};
