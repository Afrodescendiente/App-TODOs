import React from "react";
import './TodosLoading.css';
import {ImSpinner6} from 'react-icons/im'


function TodosLoading(){
    return(
    <div className="LoadingTodo-container">
     <span className="LoadingTodo-completeIcon"></span>
     
        <ImSpinner6/>
     <span className="LoadingTodo-deleteIcon"></span>
    </div>
    );
}
export {TodosLoading};