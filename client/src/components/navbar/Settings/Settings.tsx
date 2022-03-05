import React, { useEffect, useState } from "react";
import { Modal, Button, NavLink,Form } from "react-bootstrap";
import useConfig from "../../../hooks/userSettings.hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import './Settings.css';

interface Conf { 
  pomidor:number;
  rest:number;
  confHandler:Function;
}

const Settings: React.FC = () => {
  const conf:any = useConfig();

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [newConf, setNewConf] = useState<Conf>(conf); 

 const pressHandler =  (event:React.MouseEvent<HTMLButtonElement>) =>{
    setModalShow(false);
    newConf.confHandler(newConf.pomidor,newConf.rest);
  }

  

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value,modalShow);
      setNewConf({...newConf,[event.target.name]:parseInt(event.target.value)*60});
      console.log(newConf, 'newConf');
      
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
            <input type='number' defaultValue={`${newConf.pomidor/60}`} name='pomidor' min={1} max={100} onChange={changeHandler}></input>
            <p>Rest size in minutes</p>
            <input type='number' defaultValue={`${newConf.rest/60}`} name='rest' min={1} max={100} onChange={changeHandler}></input>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={pressHandler}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Settings;
