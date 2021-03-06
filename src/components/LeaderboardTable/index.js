import React, { useState, useEffect } from "react";
import { LeaderboardItem } from "../index.js";
import axios from "axios";

const url = "http://universally-challenged-server.herokuapp.com/";

export const LeaderboardTable = (userScore) => {
  const [topTen, setTopTen] = useState([]);
  const [scores, setScores] = useState([]);
  // const dispatch = useDispatch();

  const getTopTen = () => {
    const sortedScores = scores.sort(({ score: a }, { score: b }) => b - a);
    setTopTen(sortedScores.slice(0, 10));
  };

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

  return (
    <div>
      {topTen.map((score) => {
        return <LeaderboardItem key={score.id} {...score} />;
      })}
    </div>
  );
};
