import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";

const Timer321 = () => {
  const [seconds, setSeconds] = useState(3);
  const [repaintClass, setRepaintClass] = useState("");

  useEffect(() => {
    if (seconds < -1) {
      return;
    }

    const timer1 = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1500);

    const timer2 = setTimeout(() => {
      setRepaintClass(`repaint`);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  });

  useEffect(() => {
    setRepaintClass(`number-${seconds}`);
  }, [seconds]);

  const grid = [];

  for (let x = 0; x <= 15; x++) {
    for (let y = 0; y <= 9; y++) {
      grid.push(<div className={`x${x}-y${y}`}></div>);
    }
  }

  if (seconds <= 0) {
    return <div></div>;
  }

  return (
    <div aria-label="grid timer" className="countdown">
      <div className={repaintClass}>{grid}</div>
    </div>
  );
};

export { Timer321 };
