import React from "react";

export const LeaderboardItem = ({ username, score, index }) => {
  return (
    <div>
      <p>
        {index}. {username}: {score}
      </p>
    </div>
  );
};
