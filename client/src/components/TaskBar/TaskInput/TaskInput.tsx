import React,{FC} from 'react';
import { InputGroup,Button,FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskInputProps } from '../../../interfaces';



const TaskInput:FC<TaskInputProps> = ({changeHandler,pressKeyHandler, task, pressHandler}) =>{
return(
   <div>
      <InputGroup >
        <FormControl
          onChange={(e)=>{changeHandler(e)}}
          onKeyPress={(e)=>{pressKeyHandler(e)}}
          value={task}
          placeholder="Inset task for one pomidor"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {task ? (
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={(e)=>{pressHandler(e)}}
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        ) : (
          <Button variant="outline-secondary" id="button-addon2" disabled>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        )}
      </InputGroup>
   </div>
)
}

export default TaskInput;