import React from 'react';
import { useStorageListener } from './useStorageListener';
import {IoMdRefreshCircle} from "react-icons/io";
import './ChangeAlert.css'



function ChangeAlert({sincronize}) {

  const {show, toggleShow} = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="ChangeAlert-bg" >
        <div className="ChangeAlert-container">
        <p>¡Parece que modificaste tus tareas!</p>
        <p> ¿Quieres sincronizar? </p>

          <button type='button' 
          className="Refrescar-button Refrescar-button--add"
          onClick={toggleShow}
          > 
            <IoMdRefreshCircle />
          </button>
      </div>
      </div>
    );
  } else {
    return null;
  }
}



export { ChangeAlert };