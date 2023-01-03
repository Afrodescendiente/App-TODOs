import React from "react";
import './TodoItem.css';
import {IoIosCloseCircle,IoMdCreate, IoIosCheckmarkCircle} from 'react-icons/io';



function TodoItem (props){

    return(
      <li className="TodoItem">
            <span 
                className={`Icon Icon-check
                ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
               
            >
            <IoIosCheckmarkCircle/>
            </span>

            <span 
                className={`TodoItem-p 
                ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </span>
            
            <span className="TodoItem-edit"
            onClick={props.onEdit}
            >
                <IoMdCreate/>
            </span> 

            <span 
              className="Icon Icon-delete"
              onClick={props.onDelete}
            >
                <IoIosCloseCircle/>
            </span>
        </li>
    )
}
export {TodoItem};

