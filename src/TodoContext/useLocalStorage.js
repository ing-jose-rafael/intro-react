
import React from "react";
// encapsulando el metodo de guardar en localStore
function useLocalStorage(itemName,inicialValueItem) {
  
    const [error ,setError] = React.useState(false);
    const [loading ,setLoading] = React.useState(true); // para manejar el estado de loading
    const [item, setItems] = React.useState(inicialValueItem);
    
    React.useEffect(()=>{
      // para simular coneccion con la DB
      setTimeout(() => {
        try {
          
          // creando variable que permite guardar en localStorege
          const localStoregeItems = localStorage.getItem(itemName);
          let parsedItems;
          
          // valdando que exista la info en localStorage
          if (!localStoregeItems) {
            localStorage.setItem(itemName,JSON.stringify(inicialValueItem));
            parsedItems = inicialValueItem;
          } else {
            parsedItems = JSON.parse(localStoregeItems);
          }
          
          setItems(parsedItems);
          setLoading(false);
  
        } catch (error) {
          setError(error);
        }
        
      }, 3000);
  
    });
  
    const seveItems = (newTodos) => {
      try {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName,stringifiedTodos);
        setItems(newTodos);
      } catch (error) {
        setError(error);
      }
    }
  
    return {item,seveItems,loading,error};
  }
  export { useLocalStorage }