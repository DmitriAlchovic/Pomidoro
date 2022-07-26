import React from 'react';
import './Pomidor.css';
import CircularProgress from './CircularProgress';
import Timer from './Timer';
import { Config } from '../../interfaces';
import TimerControls from './TimerControls';

interface PomidorProps {
  time: number;
  workTime: boolean;
  timerOn: boolean;
  toggleTimer: Function;
  conf: Config;
  changeTimer: Function;
}

export const Pomidor: React.FC<PomidorProps> = ({
  time,
  workTime,
  timerOn,
  toggleTimer,
  conf,
  changeTimer,
}) => {
  return (
    <div>
      <div className="pomidor-card">
        <CircularProgress
          percent={
            (time / (workTime ? conf.item.time : conf.item.restTime)) * 100
          }
          workTime={workTime}
        >
          <Timer totalSeconds={time} />
        </CircularProgress>
      </div>
      <TimerControls
        timerOn={timerOn}
        toggleTimer={toggleTimer}
        time={conf.item.time}
        restTime={conf.item.restTime}
        changeTimer={changeTimer}
        workTime={workTime}
      />
    </div>
  );
};

export default Pomidor;
