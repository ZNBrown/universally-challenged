import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // New imports to work with Redux
import "./style.css";
import { scrubStr, shuffle, resetState, submitAnswer } from "../../actions";
import { useHistory } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from "axios";
import Countdown from "react-countdown";

const QuestionsPage = () => {
    const [key, setKey] = useState(0);
    const [countdownKey, setCountdownKey] = useState(0);
    const username = useSelector((state) => state.username);
    const difficulty = useSelector((state) => state.difficulty);
    const currentScore = useSelector((state) => state.score);
    const currentQuestionIndex = useSelector((state) => state.questionIndex);
    let results = useSelector((state) => state.result);
    const history = useHistory();
    const dispatch = useDispatch();

  

  const submitData = () => {
    console.log("Submit Data is calling");

    const req = {
      name: username,
      score: currentScore,
      difficulty: difficulty,
    };

    axios
      .post("/api/*", req)
      .then((response) => {
        console.log(response);
      })
      .catch(console.warn);
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
    dispatch(submitAnswer(test));
  };

  if (currentQuestionIndex <= 9) {
    const answers = shuffle([
      ...results[currentQuestionIndex].incorrectAnswers,
      results[currentQuestionIndex].correctAnswer,
    ]);

    return (
      <div
        role='questionPage'>
        <Countdown date={Date.now() + 1000} key={countdownKey}>
          <div>
            <div>
              <p className="questionNumber">Question {currentQuestionIndex + 1} </p>
              <h3> Score: {currentScore} </h3>
            </div>

            <div>
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
                  {({ remainingTime }) => remainingTime}
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
                    role='button'
                    name='answerButton'
                    className='answersButton'
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
    console.log(currentQuestionIndex);
    return (
      <>
        {submitData()}
        <div>
          <h1> The quiz is finished! </h1>
          <br></br>
          <h3>Final Score: {currentScore} /10 </h3>
          <br></br>
          <h5>
            <i>Scores will be adjusted with a multiplier of 1.6 for "hard" and 1.3 for "medium" quiz</i>
          </h5>
          <br></br>

          <button className="inputButton" onClick={goHome}>
            Home
          </button>
          <button className="inputButton" onClick={goLeaderboard}>
            Leaderboard
          </button>
        </div>
      </>
    );
  }
};

export default QuestionsPage;
