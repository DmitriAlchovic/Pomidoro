import React,{FC} from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { TimerControlsProps } from '../../../interfaces';

const TimerControls:FC<TimerControlsProps> = ({timerOn, toggleTimer, workTime, time, restTime, changeTimer})=>{
    return(<div className="timer-buttons">
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
            changeTimer(workTime ? time : restTime);
          }}
        >
          <FontAwesomeIcon icon={faRedoAlt}></FontAwesomeIcon>
        </Button>
      </div>)
}

export default TimerControls;