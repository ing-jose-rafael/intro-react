
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { NewTask } from "./NewTask";

const todos = [
  {text:'Cortar el cespe', completed:true},
  {text:'Bañar el bebe', completed:false},
  {text:'Cambiar Dico Duro', completed:true},
  {text:'Dormir', completed:true},
]
function App() {
  const completed = todos.filter(todo => todo.completed).length;
  const totalTodo = todos.length;
  const porcent = (completed*100)/totalTodo;
  return (
    
    <React.Fragment>
      {<Header/>}
      {<ProgressBar porcentaje={porcent}/>}
      {<NewTask/>}
      {/* {<TodoCounter/>} */}
      
      {/* {<TodoSearch/>} */}
      
      
      {<TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>}
      
      {<CreateTodoButton/>} 
      
    </React.Fragment>
    
  );
}

export default App;
