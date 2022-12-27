import React from "react";
import './TodoSearch.css'



function TodoSearch ({searchValue, setSearchValue, loading}){
    
    const onSearchValueChange = (event) =>{
        console.log(event.target.value)//ES EL CAMBIO QUE SE VA REALIZANDO EN EL ESTADO.
        setSearchValue(event.target.value)// MUESTRA EL ESTADO RENDERIZADO EN EL SEARCH.
    };

    return(// SI ENCIERRO EN UN ARRAY, REACT PUEDE RENDERIZAR EL COMPONENTE COMPLETO.
        <input 
            className="TodoSearch"
            placeholder="buscar tareas..."
            value={searchValue}
            onChange={onSearchValueChange}//CAMBIA EL ESTADO.
            disabled={loading}
        />
       
    );
}
export {TodoSearch};