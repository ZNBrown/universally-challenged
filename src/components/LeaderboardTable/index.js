import React, { useState, useEffect } from "react";
import { LeaderboardItem } from "../index.js";
import axios from "axios";

const url = "https://universally-challenged-server.herokuapp.com/";

export const LeaderboardTable = (props) => {
  const [topTen, setTopTen] = useState([]);
  const [scores, setScores] = useState([]);
  // const dispatch = useDispatch();

  useEffect(() => {
    const getAllScores = async (props) => {
      try {
        const data = await axios.get(url + "scores/");
        const scoresData = data.data;
        console.log("data before", scoresData);
        console.log(props.currentUser);
        scoresData.push(props.currentUser);
        console.log("data after", scoresData);
        // if (props.currentUser) {
        // }
        const sortedScores = scoresData.sort(
          ({ score: a }, { score: b }) => b - a
        );
        setScores(scoresData);
        setTopTen(sortedScores.slice(0, 10));
      } catch (err) {
        // dispatch(setError(err))
      }
    };
    getAllScores(props);
  }, []);

  return (
    <div>
      {topTen.map((score, index) => {
        return <LeaderboardItem key={score.id} {...score} index={index + 1} />;
      })}
    </div>
  );
};
