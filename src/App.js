
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const todos = [
  {text:'Cortar el cespe', completed:false},
  {text:'Bañar el bebe', completed:false},
  {text:'Cambiar Dico Duro', completed:false},
  {text:'Dormir', completed:false},
]
function App() {
  return (
    
    <React.Fragment>
      {<TodoCounter/>}
      
      {<TodoSearch/>}
      
      
      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>}
      
      {<CreateTodoButton/>} 
      
    </React.Fragment>
    
  );
}

export default App;
