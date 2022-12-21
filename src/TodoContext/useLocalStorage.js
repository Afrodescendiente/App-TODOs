import React from "react";


function useLocalStorage(itemName, initialValue) {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    //TENGO MI ESTADO INICIAL GUARDADO QUE ES UN ARRAY VACÍO O UN STRING VACÍO ...
    //Y UN MÉTODO PARA ACTUALIZARLO.LLAMO A REACT
    const [item, setItem] = React.useState(initialValue);
  
        React.useEffect(() => {
  
          setTimeout(() => {
            try {
              //ME TARIGO ALGUN ARGUMENTO, EL QUE NOS ENVÍEN POR PARÁMETRO.
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
        
              // VERIFICO SI YA EXISTE, LO PARCEO Y SINO CREAR UN ARRAY VACÍO.
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
          } else {
              parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);//ACTUALIZA EL VALOR DEL useLocalStorage
          setLoading(false);
  
            } catch (error) {
              setError(error);
            }
          }, 3000);//PASA UN SEGUNDO Y LLAMA A LA FUNCIÓN setItem
        });
  
   
    
  
    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
        const saveItem = (newItem) => {
          try {
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newItem);
  
          } catch (error) {
            setError(error)
          }
        };
  
    // Regresamos los datos que necesitamos
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage};