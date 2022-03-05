import React from "react";
import "./Timer.css";

interface TimeProps {
  totalSeconds: number;
}

const Timer: React.FC<TimeProps> = ({ totalSeconds }) => {
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
