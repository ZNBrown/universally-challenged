import React from "react";

export const LeaderboardItem = ({ username, score }) => {
  return (
    <div>
      <p>
        {username}: {score}
      </p>
    </div>
  );
};
