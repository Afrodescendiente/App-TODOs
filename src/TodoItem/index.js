import React from "react";
import './TodoItem.css'
import {IoIosCheckmarkCircle, IoIosCloseCircle} from 'react-icons/io'

function TodoItem (props){


    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check
                ${props.completed && 'Icon-check--active'}`}//SI LA PROPS RECIBIDA ES TRUE SE LE AGREGA LA NUEVA CLASE DE CSS
               onClick={props.onComplete}//aqui llamo las funciones.AHORA LE PASO LAS PROPS DE PADRE.
               //CADA VEZ QUE LE DE CLICK AL BOTON CHECK
            >
            <IoIosCheckmarkCircle/>
            </span>

            <p className={`TodoItem-p 
            ${props.completed && 'TodoItem-p--complete'}`}
            >{props.text}
            </p>

            <span className="Icon Icon-delete"
            onClick={props.onDelete}//PASANDO LA props LLAMO EL MéTODO DE App, onDelete.PARA ELIMINAR ESA 
            >
                <IoIosCloseCircle/>
            </span>
        </li>
    )
}
export {TodoItem};