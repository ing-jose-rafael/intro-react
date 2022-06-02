
// import logo from './logo.svg';
// import './App.css';
import React from "react";

const todos = [
  {text:'Cortar el cespe', completed:false},
  {text:'Bañar el bebe', completed:false},
  {text:'Cambiar Dico Duro', completed:false},
]
function App() {
  return (
    
    <React.Fragment>
      {/* {<TodoCounter/>} */}
      <h2>Has completado 2 de 3 TODOs</h2>
      
      {/* {<TodoSearch/>} */}
      <input placeholder="Tarea"/>
      
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
