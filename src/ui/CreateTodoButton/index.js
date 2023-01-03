import React from "react";
import './CreateTodoButton.css'
import {IoIosAddCircle } from 'react-icons/io'


function CreateTodoButton (props){
    return(
        <button 
            className="CreateTodoButton"
            onClick={props.onClick}
        >
            <IoIosAddCircle/>
        </button>
    );
}
export {CreateTodoButton};