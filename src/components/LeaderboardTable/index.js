import React, { useState, useEffect } from "react";
import { LeaderboardItem } from "../index.js";
import axios from "axios";

const url = "https://universally-challenged-server.herokuapp.com/";

export const LeaderboardTable = (prop) => {
  const [topTen, setTopTen] = useState([]);
  const [scores, setScores] = useState([]);
  // const dispatch = useDispatch();

  useEffect(() => {
    const getAllScores = async () => {
      try {
        const data = await axios.get(url + "scores/");
        const sortedScores = data.data.sort(
          ({ score: a }, { score: b }) => b - a
        );
        setScores(data.data);
        setTopTen(sortedScores.slice(0, 10));
      } catch (err) {
        // dispatch(setError(err))
      }
    };
    getAllScores();
  }, []);

  if (prop.userData === null) {
    return (
      <div>
        {topTen.map((score, index) => {
          return (
            <LeaderboardItem key={score.id} {...score} index={index + 1} />
          );
        })}
      </div>
    );
  } else if (prop.index <= 10) {
    return (
      <div>
        {topTen.map((score, index) => {
          return (
            <LeaderboardItem key={score.id} {...score} index={index + 1} />
          );
        })}
      </div>
    );
  } else if (prop.index > 10) {
    <div>
      {topTen.map((score, index) => {
        return (
          <div>
            <LeaderboardItem key={score.id} {...score} index={index + 1} />
            <p>
              {prop.username}: {prop.score}
            </p>
          </div>
        );
      })}
    </div>;
  }
};
