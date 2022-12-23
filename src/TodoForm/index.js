import React from 'react';
import'./TodoForm.css'
import {IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline} from 'react-icons/io'


function TodoForm ({addTodo, setOpenModal}){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange =(event) =>  {
        setNewTodoValue(event.target.value);
        };

    const onCancel =() =>  {
        setOpenModal(false);
    };

    const onSubmit =(event) =>  {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea!</label>
            <textarea
                value={newTodoValue}
                onChange ={onChange}
                placeholder ='Agregar actividad'
                
            />
            
            <div className='TodoForm-buttonContainer'>
              <button 
              type='button'
              className='TodoForm-button TodoForm-button--cancel'
              onClick={onCancel}
              >
                <IoMdCloseCircleOutline/>
              </button>  
              <button
              type='submit'
              className ='TodoForm-button TodoForm-button--add'
              >
                <IoMdCheckmarkCircleOutline/>
              </button>

            </div>
        </form>
    );
}
export {TodoForm};