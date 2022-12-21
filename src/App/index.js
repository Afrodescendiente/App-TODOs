import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";


function App() {
  return (
   <TodoProvider>
    <AppUI/>
   </TodoProvider>
  );
}


export {App};

/* 

// const defaultTodos= [
//   {text:'Hacer ejercicio', completed:false},
//   {text:'Trabajar en el proyecto', completed:true},
//   {text:'Comer bien', completed: false},
//   {text:'Estudiar Portugues'},
// ];





function App() {
//---------------------CREANDO LOCALSTORAGE------------------------------------

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedItem;//ESTA VARIABLE ES LA INFORMACIÓN QUE YA SE GUARDÓ .SE ENVIA POR DEFECTO 

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));//SE CREA UNA LISTA POR DEFECTO.
    parsedItem = [];
  } else{
    parsedItem = JSON.parse(localStorageTodos);//TRANSFORMA LA INFORMACIÓN EN UN OBJETO .
  }

//MI ESTADO ACTUAL
  const [todos, setTodos] = React.useState(parsedItem)
  const [searchValue, setSearchValue] = React.useState('')//ARRAY DE todos.
  

//CADA VEZ QUE SE RENDERICEN LOS COMPONENTES Y/O CAMBIEN LOS todos
//CALCULO PARA SABER CUANTOS todos ESTAN COMPLETADOS Y CUANTOS TENEMOS.
  const completedTodos = todos.filter(todo=> todo.completed == true).length;
  const totalTodos = todos.length;
  
//GUARDO LA INFORMACION SI EL USUARIO ESCRIBIO ALGO EN EL INPUT
  let searchedTodos =[];

  if(!searchValue.length >=1){//SI LA LONGITUD NO ES >= 1, DEVUELVE 
    searchedTodos = todos;//LA LISTA DE todos QUE YA TENIA EN MI ESTADO.22
  } else {
    searchedTodos = todos.filter(todo =>{
    const todoText= todo.text.toLowerCase();//SE GUARDA  EN MINUSCULAS.
    const searchText = searchValue.toLowerCase();//LO QUE ESCRIBAN LO USUARIOS TAMBIEN.
    return todoText.includes(searchText);//CUAL DE TODOS ESTOS todos INCLUYEN EN 
    //ALGUNA PARTE LO QUE ESCRIBIO EL USUARIO EN EL INPUT DE BUSQUEDA. DETERMINA QUE todos MUESTRA Y CUALES NO
    //DEPENDIENDO DE LA CONDICIÓN DE BUSQUEDA.
    //SI LOS USUARIOS ESCRIBEN EN EL INPUT NO VOY A MOSTRAR NADA
   //O SOLO LOS QUE COINCIDAN CON ALGUN todo.
   //EN CAMBIO SI NO ESCRIBEN NADA MUESTRO TODOS LOS todos.

  });
  };


    const saveTodos = (newTodos) =>{
      const stringifiedTodos = JSON.stringify(newTodos);//CONVERTIR EN UN STRING TODOS LOS todos.
      localStorage.setItem('TODO_V1', stringifiedTodos);//GUARDO LA INFO DE completed O delete EN 'TODO _V1' .RECARGO Y VEO LA INFO.
      setTodos(newTodos);//EVITAR RECARGAR LA PÁGINA.LLAMO A LA FUNCIÓN PARA RECRAGAR MI ESTADO.
    };

    
  //CUANDO SE EJECUTE ESTA FUNCION SE VAN A RE-RENDERIZAR TODOS LOS ESTADOS.
  //EL UNICO CAMBIO EN LA LISTA DE todos, EL QUE CUMPLA LA CONDICIÓN SE MARCA COMO COMPLETADO.
  const completeTodo = (text) =>{//CADA text de todo DEBER SER DIFERENTE PARA QUE FUNCIONE.
    const todoIndex = todos.findIndex(todo => todo.text === text);//BUSCO EL todo QUE CUMPLA CON LA CONDICIÓN, UNA VEZ OBTENIDO TENGO LA POSICIÓN.
    const newTodos =[...todos];//HAGO UNA COPIA DE MI ESTADO ACTUAL.
    newTodos[todoIndex].completed = true;//LA POSICIÓN LE MARCAMOS LA PROPIEDAD true.
    saveTodos(newTodos);//ACTUALIZAMOS EL NUEVO ESTADO RE-RENDERIZAMOS .
      
    
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos =[...todos];
    newTodos.splice(todoIndex,1);//ELIMINA UN todo PASANDOLE EL INDEX.
    saveTodos(newTodos);//ACTUALIZA SIN ESE todo ELIMINADO

  }


  return (
    <AppUI 
    totalTodos={totalTodos}//CADA VEZ QUE SE RENDERICE SE ENVÍA EL totalTodos.
    completedTodos={completedTodos}//CADA VEZ QUE SE RENDERICE SE ENVÍA EL completeTodos.
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}









    />
  );
}
 */
//------------------------CREAR NUESTRO PROPIO REACT HOOK---------------------------


