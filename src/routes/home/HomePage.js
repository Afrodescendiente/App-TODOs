import React from "react";
import {useNavigate} from 'react-router-dom';
import { useTodos } from "../useTodos";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { ChangeAlert } from "../../ui/ChangeAlert";




//App LLAMA A ESTAS PROPIEDADES DENTRO DE useTodos QUE SE VAN REPARTIENDO POR TODOS LOS COMPONENTES,GRACIAS A LA GRAN COMPOSICIÓN
function HomePage() {
  const navigate = useNavigate();

  const {
    state,
    stateUpdaters,
  }= useTodos();
  
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
    
  } =state;

  const {
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  }= stateUpdaters;

  return(
        
    <React.Fragment>
 
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={totalTodos} 
            completedTodos={completedTodos}
          />
         { <TodoSearch
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          />}
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          totalTodos={totalTodos}
          onError={() => <TodosError/>}
          onLoading={() => <TodosLoading/>}
          onEmptyTodos={() => <EmptyTodos/>}
          onEmptySearchResults={
            (searchText) => <p className="Mensaje-error">No hay resultados para {searchText}</p>}
            
          // render={todo =>(//PROPIEDAD RENDER
          //   <TodoItem
          //     key={todo.text}
          //     text={todo.text}
          //     completed={todo.completed}
          //     onComplete={() => completeTodo(todo.text)}
          //     onDelete={() => deleteTodo(todo.text)}
          // />
          // )}

        >
          {todo =>(//PROPIEDAD CHILDREN
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onEdit={() => {
                navigate('/edit/' + todo.id, 
                {
                  state:{todo}
                },
               );
              }}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            
          />
          )} 
        </TodoList>{}
       
          
        <CreateTodoButton 
          onClick={() => navigate('/new')}
        // setOpenModal ={setOpenModal}
        />
        <ChangeAlert
          sincronize ={sincronizeTodos}
        />
    </React.Fragment>



 );
}


export {HomePage};



