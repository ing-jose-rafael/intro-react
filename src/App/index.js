
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
// import { TodoCounter } from "./TodoCounter";
// import { TodoSearch } from './TodoSearch';
// import { CreateTodoButton } from '../CreateTodoButton';
// import { TodoList } from '../TodoList';
// import { TodoItem } from '../TodoItem';
// import { Header } from "../Header";
// import { ProgressBar } from "../ProgressBar";
// import { NewTask } from "../NewTask";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {text:'Cortar el cespe', completed:false},
//   {text:'Bañar el bebe', completed:false},
//   {text:'Cambiar Dico Duro', completed:false},
//   {text:'Dormir', completed:true},
// ]

function App() {

  // console.log('antes de useEffect');
  // React.useEffect(()=>{
  //   console.log('useEffect ejecutado');
  // },[totalTodo])
  // console.log('despues de useEffect');

  return (

    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
    // <AppUI 
    //   error = {error}
    //   loading = {loading}
    //   totalTodo = {totalTodo}
    //   completed = {completed}
    //   porcent ={porcent}
    //   searchValue = {searchValue}
    //   setSearchValue = {setSearchValue}
    //   searchTodo = {searchTodo}
    //   completeTodo = {completeTodo}
    //   deleteTodo = {deleteTodo}
    // />
  );
}

export default App;
