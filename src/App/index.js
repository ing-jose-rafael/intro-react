
// import logo from './logo.svg';
// import './App.css';
import React from "react";
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

// encapsulando el metodo de guardar en localStore
function useLocalStorage(itemName,inicialValueItem) {
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

  const [item, setItems] = React.useState(parsedItems)

  const seveItems = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName,stringifiedTodos);
    setItems(newTodos);
  }

  return [item,seveItems];
}

function App() {

  const [todos,seveTodos] = useLocalStorage('TODOS_V1',[]);
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
  }else{
    searchTodo = todos;
  }
  porcent = parseFloat(((completed*100)/totalTodo).toFixed(2));

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
  console.log('antes de useEffect');
  React.useEffect(()=>{
    console.log('useEffect ejecutado');
  })
  console.log('despues de useEffect');


  return (
    
    <AppUI 
      totalTodo = {totalTodo}
      completed = {completed}
      porcent ={porcent}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchTodo = {searchTodo}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
    
  );
}

export default App;
