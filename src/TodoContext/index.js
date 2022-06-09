import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(params) {
    const {
        item:todos,
        seveItems:seveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);

      const [openModal, setOpenModal ] = React.useState(false)

      const [searchValue,setSearchValue]=React.useState('');
    
      const completed = todos.filter(todo => todo.completed).length;
      const totalTodo = todos.length;
      let porcent = 0;
      
      
      let searchTodo = [];
      
      if (searchValue.length >= 1) {
        searchTodo = todos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          
          return todoText.includes(searchText);
        });
      } else {
        searchTodo = todos;
      }
      porcent = parseFloat(((completed*100)/totalTodo).toFixed(2));
    
      const addTodo = (text) => {
        const newTodo = {text, completed:false};
        const newTodos = [...todos];
        newTodos.push(newTodo);
        seveTodos(newTodos);
      }
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => 
          todo.text === text
        );
        const newTodos = [...todos];
        newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
        seveTodos(newTodos);
      }
    
      const deleteTodo= (text) => {
        const todoIndex = todos.findIndex(todo => 
          todo.text === text
        );
        const newTodos = [...todos];
        // newTodos.pop(todoIndex);
        newTodos.splice(todoIndex,1);
        seveTodos(newTodos);
      }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodo,
            completed,
            porcent,
            searchValue,
            setSearchValue,
            searchTodo,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {params.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider}