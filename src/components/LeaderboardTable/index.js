import React from "react";
import { LeaderboardItem } from "../index.js";

export const LeaderboardTable = ({ scores }) => {
  return (
    <div>
      {scores && (
        <>
          {repos.map((score) => {
            return <LeaderboardItem key={score.id} {...score} />;
          })}
        </>
      )}
    </div>
  );
};
