import React from "react";
import './CreateTodoButton.css'
import {IoIosAddCircle } from 'react-icons/io'


function CreateTodoButton (props){

    const onClickButton= () =>{//esta es la funcion que envuelve el evento para esperar el clic del usuario. No se genere clic sin hacerlo
        props.setOpenModal(prevState => !prevState);
    }; 

    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            <IoIosAddCircle/>
        </button>
    );
}
export {CreateTodoButton};