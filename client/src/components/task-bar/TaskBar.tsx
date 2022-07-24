import React, { ReactElement, useEffect, useState } from "react";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './task-bar.css';
import useStorage from "../../hooks/storage.hook";

const TaskBar = () => {
  const storedTasks = useStorage('tasks',[]);
  const [task, setTask] = useState<string>("");
  const [taskArray, setTaskArray] = useState<string[]>([]);
  const [taskStack, setTaskStack] = useState<ReactElement[]>([]);


  useEffect(()=>{
      if(storedTasks.item){
        setTaskArray(storedTasks.item);
      }
  },[storedTasks.item])

  useEffect(() => {
    const Tasks: ReactElement[] = taskArray.map((currentValue, index) => {
      return (
        <Card border="primary" className="task" id={`${index}`} key={index}>
          <Card.Body id={`${index}`} key={index}>
            {currentValue}
            <Button className="delete-button" id={`${index}`} key={index} onClick={deleteHandler}>
             <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> 
            </Button>
          </Card.Body>
        </Card>
      );
    });
    setTaskStack(Tasks);
  }, [taskArray]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const pressHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const arr: string[] = taskArray.slice();
    arr.push(task);
    storedTasks.createStorage(arr);
    setTask("");
  };

  const pressKeyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && task) {
      const arr: string[] = taskArray.slice();
      arr.push(task);
      storedTasks.deleteStorage();
      storedTasks.createStorage(arr);
      setTask("");
    }
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
    console.log(event.currentTarget.id);

    const arr: string[] = [...taskArray.slice(0,parseInt(event.currentTarget.id)),...taskArray.slice(parseInt(event.currentTarget.id)+1)]
    storedTasks.deleteStorage();
    storedTasks.createStorage(arr);
  } 

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          onChange={changeHandler}
          onKeyPress={pressKeyHandler}
          value={task}
          placeholder="Inset task for one pomidor"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {task ? (
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={pressHandler}
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        ) : (
          <Button variant="outline-secondary" id="button-addon2" disabled>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        )}
      </InputGroup>
      {taskStack}
    </div>
  );
};

export default TaskBar;
