import React from "react";
import { useLocalStorage } from "./useLocalStorage";


//CUSTOM HOOKS useTodos
function useTodos(){
    const {
        item:todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    //---------ESTADOS DERIVADOS--------------
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

    //---------ESTADOS DERIVADOS--------------
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    //---------ESTADO DERIVADO COMPLEJO-------
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    //----------ACTUALIZADORES------------------
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text,
        })
        saveTodos(newTodos);
      };
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
      };


      const states = {
        error,
        loading,
        searchedTodos,
        totalTodos,
        completeTodo,
        completedTodos,
        searchValue,
        openModal,
      };

      const stateUpdaters={
        setOpenModal,
        addTodo,
        deleteTodo,
        setSearchValue,
        sincronizeTodos,
        };
        return {states, stateUpdaters};
      }
            
    



export {useTodos};

