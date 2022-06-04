
// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import { TodoCounter } from "./TodoCounter";
// import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Header } from "../Header";
import { ProgressBar } from "../ProgressBar";
import { NewTask } from "../NewTask";

const defaultTodos = [
  {text:'Cortar el cespe', completed:false},
  {text:'Bañar el bebe', completed:false},
  {text:'Cambiar Dico Duro', completed:false},
  {text:'Dormir', completed:true},
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)

  const completed = todos.filter(todo => todo.completed).length;
  const totalTodo = todos.length;
  const porcent = parseFloat(((completed*100)/totalTodo).toFixed(2));

  const [searchValue,setSearchValue]=React.useState('');

  let searchTodo = todos;

  if (searchValue.length >= 1) {
    searchTodo = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => 
      todo.text === text
    );
    const newTodos = [...todos];
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo= (text) => {
    const todoIndex = todos.findIndex(todo => 
      todo.text === text
    );
    const newTodos = [...todos];
    // newTodos.pop(todoIndex);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    
    <React.Fragment>
      {<Header total={totalTodo} completed={completed} />}
      {<ProgressBar total={totalTodo} completed={completed} porcentaje={porcent}/>}
      {<NewTask 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />}
      {/* {<TodoCounter/>} */}
      
      {/* {<TodoSearch/>} */}
      
      
      {<TodoList>
        {searchTodo.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>{completeTodo(todo.text)}}
            onDelete={()=>{deleteTodo(todo.text)}}
            />
        ))}
      </TodoList>}
      
      {<CreateTodoButton/>} 
      
    </React.Fragment>
    
  );
}

export default App;
