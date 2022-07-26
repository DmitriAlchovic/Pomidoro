import React from "react";
import { TimerProps } from "../../../interfaces";
import "./Timer.css";



const Timer: React.FC<TimerProps> = ({ totalSeconds }) => {
  let minutes = Math.floor(Math.floor(totalSeconds / 60) / 10)
    ? Math.floor(totalSeconds / 60)
    : "0" + Math.floor(totalSeconds / 60);
  let seconds = Math.floor(Math.floor(totalSeconds % 60) / 10)
    ? Math.floor(totalSeconds % 60)
    : "0" + Math.floor(totalSeconds % 60);
  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
};

export default Timer;
