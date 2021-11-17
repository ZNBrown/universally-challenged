import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; // New imports to work with Redux
import "./style.css";
import { scrubStr, shuffle, resetState, submitAnswer } from "../../actions";
import { useHistory } from "react-router";
import axios from "axios";
import Countdown from "react-countdown";
import { Timer, LeaderboardTable } from "../../components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const QuestionsPage = () => {
  const [key, setKey] = useState(0);
  const [countdownKey, setCountdownKey] = useState(0);
  const [currentUser, SetCurrentUser] = useState(0);
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

  const updatePlayer = () => {

  }

  const submitData = async () => {
    console.log("Submit Data is calling");

    const req = {
      username: username,
      score: currentScore,
      // difficulty: difficulty,
    };

    const response = await axios.post(
      "https://universally-challenged-server.herokuapp.com/scores/",
      req
    );
    console.log(response);
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
    let test = e.target.value;
    console.log(test);
    setKey((prevKey) => prevKey + 1);
    setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
    let arrayToPass = [test, currentUser]
    dispatch(submitAnswer(arrayToPass));
    
    //userList[currentUser]
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


  if (currentQuestionIndex <=  9) {
    const answers = shuffle([
      ...results[currentQuestionIndex].incorrectAnswers,
      results[currentQuestionIndex].correctAnswer,
    ]);

    return (
      <div role="questionPage">
        <Countdown date={Date.now() + 1000} key={countdownKey}>
          <div>
            <div>
              <p className="questionNumber">
                Question {currentQuestionIndex + 1}{" "}
              </p>
              <h3> Score: {currentScore} </h3>
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
                  duration={60}
                  colors={[
                    ["#64DFDF", 0.25],
                    ["#48BFE3", 0.25],
                    ["#5E60CE", 0.25],
                    ["#6930C3", 0.25],
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
    console.log("second-", currentQuestionIndex);
    // submitData();
    return (
      <>
        <div>
          <h1> The quiz is finished! </h1>
          <br></br>
          <h3>Final Score: {currentScore} /10 </h3>
          <br></br>
          <h5>
            <i>
              Scores will be adjusted with a multiplier of 1.6 for "hard" and
              1.3 for "medium" quiz
            </i>
          </h5>
           <button className="inputButton2" onClick={goHome}>
            Home
          </button>
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
