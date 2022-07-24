import React from 'react';
import { Button } from 'react-bootstrap';
import './Pomidor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from './circular-progress/CircularProgress';
import Timer from './timer/Timer';
import {Config} from '../../interfaces';

interface PomidorProps {
  time: number;
  workTime: boolean;
  timerOn: boolean;
  toggleTimer: Function;
  conf: Config
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
          percent={(time / (workTime ? conf.item.time : conf.item.restTime)) * 100}
          workTime={workTime}
        >
          <Timer totalSeconds={time} />
        </CircularProgress>
      </div>
      <div className="timer-buttons">
        {timerOn ? (
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              toggleTimer(false);
            }}
          >
            <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
          </Button>
        ) : (
          <Button
            className="btn-rounded"
            variant="primary"
            size="lg"
            onClick={() => {
              toggleTimer(true);
            }}
          >
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </Button>
        )}
        <Button
          className="btn-rounded"
          variant="primary"
          size="lg"
          onClick={() => {
            console.log(conf);
            
            changeTimer(workTime ? conf.item.time : conf.item.restTime);
          }}
        >
          <FontAwesomeIcon icon={faRedoAlt}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

export default Pomidor;
