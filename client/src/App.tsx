import React,{useState,useEffect} from "react";
import Pomidor from "./components/pomidor/Pomidor";
import NavbarTop from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskBar from "./components/task-bar/TaskBar";
import './App.css';
import useStorage from "./hooks/storage.hook";

const DEFAULT_CONFIG = {
  time:600,
  restTime:300
}

function App() {
  
  const conf:any = useStorage('config',DEFAULT_CONFIG);
  const [workTime, setWorkTime] = useState<boolean>(true);
  const [time, setTime] = useState<number>(1);
  const [timerOn, setTimeOn] = useState<boolean>(false);
  
   useEffect(()=>{
    if(conf.item){
      setTime(conf.item.time)
    }
  },[conf.item]) 

  useEffect(() => {
    if (timerOn && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (time === 0 && workTime) {
      setWorkTime(false);
      setTime(conf.item.restTime);
    } else if (time === 0 && !workTime) {
      setWorkTime(true);
      setTime(conf.item.time);
    }
  }, [timerOn, time, workTime, conf.item]);

  const toggleTimer = (timerStatus:boolean) =>{
    setTimeOn(timerStatus)
  }

  
  const changeTimer = (seconds:number)=>{
    setTime(seconds)
  }

  return (
    <div className="App">
      {conf.item &&<NavbarTop conf={conf} />}
      {conf.item&&<Pomidor time={time} timerOn={timerOn} workTime={workTime} toggleTimer={toggleTimer} conf={conf} changeTimer={changeTimer} />}
      <TaskBar />
    </div>
  );
}

export default App;
