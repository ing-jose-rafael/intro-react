
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from './TodoSearch';

const todos = [
  {text:'Cortar el cespe', completed:false},
  {text:'Bañar el bebe', completed:false},
  {text:'Cambiar Dico Duro', completed:false},
]
function App() {
  return (
    
    <React.Fragment>
      {<TodoCounter/>}
      
      {<TodoSearch/>}
      
      
      {/* {<TodoList>
        {todos.map(todo => (
          <TodoItem/>
        ))}
      </TodoList>} */}
      
      {/* {<CreateTodoButton/>} */}
      <button>+</button>
    </React.Fragment>
    
  );
}

export default App;
