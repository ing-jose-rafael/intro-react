
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

const defaultTodos = [
  {text:'Cortar el cespe', completed:true},
  {text:'Bañar el bebe', completed:false},
  {text:'Cambiar Dico Duro', completed:true},
  {text:'Dormir', completed:true},
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)

  const completed = todos.filter(todo => todo.completed).length;
  const totalTodo = todos.length;
  const porcent = (completed*100)/totalTodo;

  const [searchValue,setSearchValue]=React.useState('');

  let searchTodo = todos;

  if (searchValue.length >= 1) {
    searchTodo = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();

    });
  }

  return (
    
    <React.Fragment>
      {<Header total={totalTodo} completed={completed} />}
      {<ProgressBar porcentaje={porcent}/>}
      {<NewTask 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />}
      {/* {<TodoCounter/>} */}
      
      {/* {<TodoSearch/>} */}
      
      
      {<TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            setTodoValue = {setSearchValue}
            />
        ))}
      </TodoList>}
      
      {<CreateTodoButton/>} 
      
    </React.Fragment>
    
  );
}

export default App;
