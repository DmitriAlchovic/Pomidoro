import React,{FC} from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./TaskList.css";
import { TaskListProps } from "../../../interfaces";

const TaskList:FC<TaskListProps> = ({index, currentValue,deleteHandler}) => {
  return (
    <div>
     <Card border="primary" className="task" id={`${index}`} >
          <Card.Body id={`${index}`} >
            {currentValue}
            <Button
              className="delete-button"
              id={`${index}`}
              key={index}
              onClick={(e)=>{deleteHandler(e)}}
            >
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>
          </Card.Body>
        </Card>
    </div>
  );
};

export default TaskList;
