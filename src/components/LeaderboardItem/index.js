import React from "react";

export const LeaderboardItem = ({ username, score, index, className }) => {
  return (
    <div>
      <p className={className}>
        {index}. {username}: {score}
      </p>
    </div>
  );
};
