import { useState, useEffect, useCallback } from "react";

const storageName: string = "userConfig";

const useConfig = () => {

  const data = localStorage.getItem(storageName);
  const conf = data?JSON.parse(data):{pomidor:15,rest:30}
    // time in seconds
    const [pomidor,setPomidor] = useState<number> (conf.pomidor)
    const [rest, setRest] = useState <number> (conf.rest); 

  useEffect(() => {
    let data = localStorage.getItem(storageName);
    if(data){
      const conf = JSON.parse(data);
      console.log(conf,'CONFFFFF');
      
        setPomidor(conf.pomidor);
        setRest(conf.rest);
        
    }
    
  },[pomidor,rest]);
  
  const confHandler = useCallback((pomidorTime: number, restTime: number)=>{
    console.log(pomidorTime,restTime);
    
    setPomidor(pomidorTime);
    setRest(restTime);
    localStorage.setItem(
      storageName,
      JSON.stringify({
        pomidor: pomidorTime,
        rest: restTime,
      })
    );
  },[])
console.log(pomidor, rest,'HEHE');

  return {pomidor,rest,confHandler};
};
export default useConfig;
