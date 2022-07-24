import React, {  useState } from "react";
import { Modal, Button, NavLink,Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import './Settings.css';
import { SettingsProps } from "../../../interfaces"; 

interface Conf {
  time:number;
  restTime:number;
}

const Settings: React.FC<SettingsProps> = ({conf}) => {

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [newConf, setNewConf] = useState<any>(conf.item); 
  

 const pressHandler =  (event:React.MouseEvent<HTMLButtonElement>) =>{
    setModalShow(false);
    conf.createStorage(newConf);
  }

  

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value)
      if(!isNaN(value)){

      setNewConf({...newConf,[event.target.name]:parseInt(event.target.value)*60});
      }
    }

  
   
  return (
    <div>
      <NavLink href="#Settings" onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
      </NavLink>
 <Modal
        show={modalShow}
        onHide={()=>{modalShow?setModalShow(false):setModalShow(true)}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        contered={`${true}`}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Pomidoro size in minutes</p>
             <input type='number' value={`${newConf.time/60}`} name='time' min={1} max={100} onChange={changeHandler}></input>
            <p>Rest size in minutes</p>
            <input type='number' value={`${newConf.restTime/60}`} name='restTime' min={1} max={100} onChange={changeHandler}></input> 

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={pressHandler}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Settings;
