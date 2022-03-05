import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import useConfig from "../../hooks/userSettings.hook";
import "./Pomidor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import CircularProgress from "./circular-progress/CircularProgress";
import Timer from "./timer/Timer";



export const Pomidor: React.FC = () => {

  const conf:any = useConfig();
  
  const [workTime, setWorkTime] = useState<boolean>(true);
  const [time, setTime] = useState<number>(workTime ? conf.pomidor:conf.rest);
  const [timerOn, setTimeOn] = useState<boolean>(false);

  useEffect(() => {
    if (timerOn && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (time === 0 && workTime) {
      setWorkTime(false);
      setTime(conf.rest);
    } else if (time === 0 && !workTime) {
      setWorkTime(true);
      setTime(conf.pomidor);
    }
  }, [timerOn, time]);

  useEffect (()=>{
    setTime(workTime ? conf.pomidor:conf.rest);
    
  },[conf]);

  return (
    <div>
      <div className="pomidor-card">
        <CircularProgress percent={(time/(workTime?conf.pomidor:conf.rest))*100} workTime ={workTime}>
          <Timer totalSeconds={time} />
        </CircularProgress>
      </div>
      <div className="timer-buttons">
        {timerOn ? (
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              setTimeOn(false);
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
              setTimeOn(true);
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
            setTime(workTime?conf.pomidor:conf.rest);
          }}
        >
          <FontAwesomeIcon icon={faRedoAlt}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

export default Pomidor;
