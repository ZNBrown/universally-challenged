import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch } from "react-redux";

import "./styles.css";

export const Timer = ({ setCountdownKey }) => {
  const renderTime = ({ remainingTime }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);
    // const dispatch = useDispatch();

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
      <div aria-label='timer' className="time-wrapper">
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
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        onComplete={() => {
          setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
          dispatch(submitAnswer(""));
          return [true, 100];
        }}
        // key={key}
        isPlaying
        duration={10}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
