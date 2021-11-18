import React from "react";

export const LeaderboardItem = ({ username, score, index, className }) => {
  return (
    <div data-testid='user' aria-label='user placement'>
      <p className={className}>
        {index}. {username}: {score}
      </p>
    </div>
  );
};
