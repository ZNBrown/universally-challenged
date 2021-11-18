import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; // New imports to work with Redux
import "./style.css";
import { scrubStr, shuffle, resetState, submitAnswer } from "../../actions";
import { useHistory } from "react-router";
import axios from "axios";
import Countdown from "react-countdown";
import { Timer, LeaderboardTable, Timer321 } from "../../components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ceil } from "lodash";

const QuestionsPage = () => {
  const [key, setKey] = useState(0);
  const timer = useRef(null);
  const [countdownKey, setCountdownKey] = useState(0);
  const [currentUser, setCurrentUser] = useState(0);
  const userList = useSelector((state) => state.userList);
  const userNum = useSelector((state) => state.userNum);
  const username = useSelector((state) => state.username);
  const difficulty = useSelector((state) => state.difficulty);
  const currentScore = useSelector((state) => state.score);
  const currentQuestionIndex = useSelector((state) => state.questionIndex);
  let results = useSelector((state) => state.result);
  const history = useHistory();
  const dispatch = useDispatch();
  //idea: have users list in the state
  //records score for each
  //have currentUser, a number (used to index the users list)
  //describes which user is going now

  const updatePlayer = (currentUser) => {
    if (currentUser == userNum - 1) {
      setCurrentUser(0);
    } else {
      setCurrentUser(currentUser + 1);
    }
  };

  const submitData = async (req) => {
    console.log("i am submit data!");
    let latest;
    let postReq = await axios.post(
      "https://universally-challenged-server.herokuapp.com/scores/",
      req
    );
    latest = postReq.data.id;
    console.log(latest);
    let response = await axios.delete(
      `https://universally-challenged-server.herokuapp.com/scores/${latest}`
    );

    // for (let index = 0; index < userNum; index++) {
    //   console.log(`index ${index}`)
    //   console.log("guh???")
    //   const req = {
    //     username: userList[index].name,
    //     score: userList[index].score,
    //     // difficulty: difficulty,
    //   };
    //   const response = await axios.post(
    //     "https://universally-challenged-server.herokuapp.com/scores/",
    //     req
    //   );
    //   console.log("huh")
    //   console.log(response)

    // }
  };

  function goHome() {
    dispatch(resetState());
    history.push("/");
  }

  function goLeaderboard() {
    dispatch(resetState());
    history.push("/Leaderboard");
  }

  const sendAnswer = (e) => {
    console.log(currentUser);
    console.log(userList[currentUser]);
    let test = e.target.value;
    setKey((prevKey) => prevKey + 1);
    setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
    let arrayToPass = [test, currentUser];
    console.log("before submit answer");
    console.log(userList[currentUser]);
    dispatch(submitAnswer(arrayToPass));
    console.log("after submit answer");

    console.log(userList[currentUser]);

    updatePlayer(currentUser);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const renderTime = ({ remainingTime }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);
    const dispatch = useDispatch();

    if (currentTime.current !== remainingTime) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = remainingTime;
    } else {
      isNewTimeFirstTick.current = false;
    }

    // force one last re-render when the time is over to tirgger the last animation
    if (remainingTime === 0) {
      setTimeout(() => {
        setOneLastRerender((val) => val + 1);
      }, 20);
    }

    const isTimeUp = isNewTimeFirstTick.current;

    return (
      <div className="time-wrapper">
        <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
          {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? "down" : ""}`}
          >
            {prevTime.current}
          </div>
        )}
      </div>
    );
  };

  const loadHandler = () => {
    const timerHTML = useRef(timer);
    timerHTML.display = none;
  };

  if (currentQuestionIndex <= 2) {
    const answers = shuffle([
      ...results[currentQuestionIndex].incorrectAnswers,
      results[currentQuestionIndex].correctAnswer,
    ]);

    return (
      <div role="questionPage">
        <h1>{userList[currentUser].name}, it's your turn!</h1>
        <Countdown date={Date.now() + 1000} key={countdownKey}>
          <Timer321 ref={timer} />
          <div onLoad={loadHandler}>
            <div>
              <p className="questionNumber">
                Round {ceil((currentQuestionIndex + 1) / userNum)}{" "}
              </p>
              <h3>
                {" "}
                {userList[currentUser].name}'s score:{" "}
                {userList[currentUser].score}{" "}
              </h3>
            </div>

            <div className="timer-wrapper">
              <h1>
                <CountdownCircleTimer
                  onComplete={() => {
                    setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
                    dispatch(submitAnswer(""));
                    return [true, 100];
                  }}
                  key={key}
                  isPlaying
                  duration={30}
                  colors={[
                    ["#61E287", 0.25],
                    ["#8EE348", 0.25],
                    ["#F39F39", 0.25],
                    ["#E94020", 0.25],
                  ]}
                >
                  {/* {({ remainingTime }) => remainingTime} */}
                  {renderTime}
                </CountdownCircleTimer>
              </h1>
            </div>

            <br></br>
            <div>
              <p className="questionTitle">
                {" "}
                {scrubStr(results[currentQuestionIndex].question)}{" "}
              </p>

              <div className="answersGrid">
                {answers.map((t, i) => (
                  <button
                    role="button"
                    name="answerButton"
                    className="answersButton"
                    idkey={i}
                    onClick={sendAnswer}
                    value={t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Countdown>
      </div>
    );
  } else {
    // for (let newCoolIndex = 0; newCoolIndex < userNum; newCoolIndex++) {
    //   // console.log(`index ${newCoolIndex}`)
    //   // console.log("guh???")
    //   const req = {
    //     username: userList[newCoolIndex].name,
    //     score: userList[newCoolIndex].score,
    //     // difficulty: difficulty,
    //   };

    //   // console.log("huh")
    //
    // }
    const req = {
      username: username,
      score: currentScore,
      // difficulty: difficulty,
    };
    submitData(req);
    return (
      <>
        <div>
          <h1> The quiz is finished! </h1>
          <br></br>
          <h3>Final Score: {currentScore} /10 </h3>
          <br></br>
          {/* <h5>
            <i>
              Scores will be adjusted with a multiplier of 1.6 for "hard" and
              1.3 for "medium" quiz
            </i>

          </h5> */}
           

          <br></br>
          <h3>Top Scores</h3>

          <LeaderboardTable
            currentUser={{
              username: username,
              score: currentScore,
              className: "active",
              id: getRandomInt(100, 1000),
            }}
          />
          <button className="inputButton" onClick={goHome}>
            Home
          </button>
        </div>
      </>
    );
  }
};

export default QuestionsPage;
