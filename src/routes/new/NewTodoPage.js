import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import {useTodos} from '../useTodos';

function NewTodoPage (){

    const { stateUpdaters} = useTodos();
    const { addTodo} = stateUpdaters;
 
    return (
        <TodoForm
         label='Escribe una tarea'
        //  submitText='añade'
         submitEvent={(text) => addTodo(text)}
            />
    );
}

export{NewTodoPage };