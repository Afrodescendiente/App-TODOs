import React from 'react';
import'./TodoForm.css'
import {IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {useNavigate } from 'react-router-dom';

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
   
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Agregar actividad"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          cancelar
          <IoMdCloseCircleOutline/>
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {props.submitText}
          <IoMdCheckmarkCircleOutline/>
        </button>
      </div>
    </form>
  );
}

export { TodoForm };