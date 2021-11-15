import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

const CircleTimer = () => {
  const renderTime = ({ remainingTime }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);

    if (currentTime.current !== remainingTime) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = remainingTime;
    } else {
      isNewTimeFirstTick.current = false;
    }

    //force last re-render
    if (remainingTime === 0) {
      setTimeout(() => {
        setOneLastRerender((value) => value + 1);
      }, 20);
    }

    const isTimeUp = isNewTimeFirstTick.current;
    return (
      <div className="time-container">
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
    <div className="timer-container">
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
export { CircleTimer };
