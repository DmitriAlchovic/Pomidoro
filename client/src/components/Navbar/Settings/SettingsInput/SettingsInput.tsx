import React,{FC} from 'react';
import { Modal } from 'react-bootstrap';
import { SettingsInputProps } from '../../../../interfaces';

const SttingsInput:FC<SettingsInputProps> = ({time, changeHandler, restTime}) =>{
    return(<Modal.Body>
          <p>Pomidoro size in minutes</p>
          <input
            type="number"
            value={`${time / 60}`}
            name="time"
            min={1}
            max={100}
            onChange={(e)=>changeHandler(e)}
          ></input>
          <p>Rest size in minutes</p>
          <input
            type="number"
            value={`${restTime / 60}`}
            name="restTime"
            min={1}
            max={100}
            onChange={(e)=>changeHandler(e)}
          ></input>
        </Modal.Body>)
}

export default SttingsInput;